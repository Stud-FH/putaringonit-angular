import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MealUpdateObject} from "../../domain/meal/meal-update-object";

@Component({
  selector: 'app-dish-editor',
  templateUrl: './meal-editor.component.html',
  styleUrls: ['./meal-editor.component.scss']
})
export class MealEditorComponent {

  constructor(public dialogRef: MatDialogRef<MealEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: MealUpdateObject) { }

  cancel(): void {
    this.data.invalidate();
    this.dialogRef.close();
  }
}
