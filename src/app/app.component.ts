import {Component} from '@angular/core';
import {Account} from "./domain/account/account";
import {Profile} from "./domain/profile/profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wir sagen Ja!';

  private _account?: Account;
  get account() {
    return this._account;
  }
  set account(value: Account | undefined) {
    this._account = value;
    this.persistToken(value);
    this.profile = value?.profiles.length === 1 ? value.profiles[0] : undefined
  }

  get context() {
    return this._account?.context;
  }

  private _profile?: Profile;
  get profile() {
    return this._profile;
  }
  set profile(value: Profile | undefined) {
    this._profile = (value && this._account)? this._account.registerProfile(value) : undefined;
  }

  constructor() {
  }

  persistToken(account?: Account) {
    if (account?.token) {
      localStorage.setItem("token", account.token);
    } else {
      localStorage.removeItem('token');
    }
  }

  loadToken(): string | undefined {
    return localStorage.getItem('token') ?? undefined;
  }

}
