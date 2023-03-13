import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-welcome-popup',
  templateUrl: './welcome-popup.component.html',
  styleUrls: ['./welcome-popup.component.scss', '../dialog-styles.scss']
})
export class WelcomePopupComponent {

  constructor(public dialogRef: MatDialogRef<WelcomePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ok(): void {
    this.dialogRef.close();
  }
}
