import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WishUpdateObject} from "../../domain/wish/wish-update-object";

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss', '../dialog-styles.scss']
})
export class WishEditorComponent {

  get ready() {
    return this.data.title && this.data.changed;
  }

  constructor(public dialogRef: MatDialogRef<WishEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: WishUpdateObject) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
