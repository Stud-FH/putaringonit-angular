import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Wish} from "../../domain/wish/wish";

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss', '../dialog-styles.scss']
})
export class WishEditorComponent {

  constructor(public dialogRef: MatDialogRef<WishEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: Wish) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
