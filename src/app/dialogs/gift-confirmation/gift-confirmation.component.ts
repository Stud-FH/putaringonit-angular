import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Gift} from "../../domain/gift/gift";

@Component({
  selector: 'app-gift-confirmation',
  templateUrl: './gift-confirmation.component.html',
  styleUrls: ['./gift-confirmation.component.scss', '../dialog-styles.scss']
})
export class GiftConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<GiftConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: Gift) { }

  ok(): void {
    this.dialogRef.close();
  }
}
