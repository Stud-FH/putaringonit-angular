import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DishUpdateObject} from "../../domain/dish/dish-update-object";

@Component({
  selector: 'app-dish-editor',
  templateUrl: './dish-editor.component.html',
  styleUrls: ['./dish-editor.component.scss', '../dialog-styles.scss']
})
export class DishEditorComponent {

  get ready() {
    return this.data.title && this.data.changed;
  }

  constructor(public dialogRef: MatDialogRef<DishEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: DishUpdateObject) { }

  cancel(): void {
    this.data.invalidate();
    this.dialogRef.close();
  }
}
