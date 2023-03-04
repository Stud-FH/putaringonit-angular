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
    let value = this.data.wish.value
    return (value? value : Infinity) - this.data.wish.accumulatedExceptFrom(this.data.donorId);
  }

  get reservedValue(): number {
    return this.data.wish.giftOf(this.data.donorId)?.value ?? 0
  }

  get accumulatedWithout() {
    return this.data.wish.accumulatedExceptFrom(this.data.donorId);
  }

  get accumulatedWith() {
    return this.data.wish.accumulatedExceptFrom(this.data.donorId) + (this.data.value ?? 0);
  }

  get progressWithout() {
    let value = this.data.wish.value
     return value? this.accumulatedWithout / value : 0;
  }

  get progressWith() {
    let value = this.data.wish.value
    return value? this.accumulatedWith / value : this.data.value;
  }

  get accumulatedText() {
    switch(this.data.wish.unit) {
      case 'CHF':
        return `CHF ${this.accumulatedWith}`;
      case 'Piece':
        return `${this.accumulatedWith}`;
      default: return '';
    }
  }

  constructor(public dialogRef: MatDialogRef<GiftEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: GiftUpdateObject) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
