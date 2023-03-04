import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../domain/account/account";
import {Profile} from "../domain/profile/profile";
import {AccountService} from "../domain/account/account.service";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {catchError, Observable, of} from "rxjs";
import {map} from "rxjs/operators"
import {MatDialog} from "@angular/material/dialog";
import {ProfileEditorComponent} from "../dialogs/profile-editor/profile-editor.component";
import {ProfileService} from "../domain/profile/profile.service";

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  @Input() account?: Account;
  @Input() profile?: Profile;
  @Input() token?: string;

  @Output() accountChange = new EventEmitter<Account>();
  @Output() profileChange = new EventEmitter<Profile>();

  loginInProgress = false;
  error?: any;

  method = new FormControl('code', {validators: [Validators.required]});
  code = new FormControl('', {validators: [this.conditionallyRequiredValidator('code'), this.unauthorizedValidator()]});
  username = new FormControl('', {
    validators: [this.conditionallyRequiredValidator('password')],
    asyncValidators: [this.usernameValidator()],
    updateOn: 'blur'
  })
  password = new FormControl('', {validators: [this.conditionallyRequiredValidator('password'), this.unauthorizedValidator()]});

  form = this.formBuilder.group([this.method, this.code, this.username, this.password]);

  constructor(private accountService: AccountService, private profileService: ProfileService, private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    if (this.token) {
      this.accountService.loginWithToken(this.token).pipe(
        catchError(err => this.handleLoginError(err))
      ).subscribe(res => this.setAccount(res));
    }
  }

  updateForm() {
    this.form.updateValueAndValidity();
  }

  login() {
    this.loginInProgress = true;
    switch (this.method.value) {
      case 'code':
        this.accountService.loginWithCode(this.code.value!).pipe(
          catchError(err => this.handleLoginError(err)),
        ).subscribe(res => this.setAccount(res));
        break;
      case 'password':
        this.accountService.loginWithPassword(this.username.value!, this.password.value!).pipe(
          catchError(err => this.handleLoginError(err))
        ).subscribe(res => this.setAccount(res));
        break;
    }
  }

  handleLoginError(error: any): Observable<Account | undefined> {
    console.log(error);
    this.loginInProgress = false;
    this.error = error;
    this.updateForm();
    return of(undefined);
  }

  setAccount(a?: Account) {
    this.loginInProgress = false;
    if (a) this.accountChange.emit(a);
  }

  conditionallyRequiredValidator(method: string) {
    const that = this;
    return (control: AbstractControl): ValidationErrors | null =>
      that.method.value === method && !control.value ? {required: true} : null;
  }

  unauthorizedValidator() {
    const that = this;
    return (_: AbstractControl): ValidationErrors | null =>
      that.error?.status === 401 ? {unauthorized: true} : null;
  }

  usernameValidator() {
    const that = this;
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      that.accountService.existsUsername(control.value)
        .pipe(map(b => that.method.value === 'password' && !b ? {registeredUsername: true} : null));
  }

  todoCount(profile?: Profile): number {
    if (profile) return profile.todoCount();
    let count = 0;
    this.account?.profiles.filter(p => p.identifier !== this.profile?.identifier).forEach(p => count += p.todoCount());
    return count;
  }

  edit(profile: Profile) {
    const data = profile.update;
    const dialogRef = this.dialog.open(ProfileEditorComponent, {data});

    dialogRef.afterClosed().subscribe(submitted => {
      if (submitted) this.profileService.update(submitted, this.profile!).subscribe(res => this.profileChange.emit(res));
    });
  }

  logout() {
    this.accountChange.emit(undefined);
  }
}
