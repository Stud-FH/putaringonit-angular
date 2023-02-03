import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GiftUpdateObject} from "../../domain/gift/gift-update-object";

@Component({
  selector: 'app-gift-editor',
  templateUrl: './gift-editor.component.html',
  styleUrls: ['./gift-editor.component.scss', '../dialog-styles.scss']
})
export class GiftEditorComponent {

  get maxValue(): number {
    return this.data.wish.value - this.data.wish.accumulatedExceptFrom(this.data.donorId);
  }

  get reservedValue(): number {
    return this.data.wish.giftOf(this.data.donorId)?.value ?? 0
  }

  get progressWithout() {
    return this.data.wish.accumulatedExceptFrom(this.data.donorId) / this.data.wish.value;
  }

  get progressWith() {
    return (this.data.wish.accumulatedExceptFrom(this.data.donorId) + (this.data.value ?? 0)) / this.data.wish.value;
  }

  get appreciationText() {
    let status;
    switch (this.data.status) {
      case 'Reserved':
        status = 'reserviert';
        break;
      case 'Paid':
        status = 'finanziert';
        break;
      case 'Delivered':
        status = 'beigetragen';
        break;
      default: return '';
    }

    switch(this.data.wish.unit) {
      case 'CHF':
        return `Du hast CHF ${this.reservedValue} ${status}. Vielen Dank!`;
      case 'Piece':
        return `Du hast ${this.reservedValue} Stück ${status}. Vielen Dank!`;
      default: return '';
    }
  }

  constructor(public dialogRef: MatDialogRef<GiftEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: GiftUpdateObject) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
