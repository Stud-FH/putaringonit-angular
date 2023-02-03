import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DishSelectionUpdateObject} from "../../domain/dish-selection/dish-selection-update-object";
import {Dish} from "../../domain/dish/dish";

@Component({
  selector: 'app-menu-selection-editor',
  templateUrl: './dish-selection-editor.component.html',
  styleUrls: ['./dish-selection-editor.component.scss', '../dialog-styles.scss']
})
export class DishSelectionEditorComponent {

  get meal() {
    return this.data.meal;
  }

  get dish(): Dish | undefined {
    return this.meal.dishes.filter(d => d.id === this.data.dishId)[0]
  }

  get ready() {
    return this.data.dishId && this.data.changed;
  }

  constructor(public dialogRef: MatDialogRef<DishSelectionEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: DishSelectionUpdateObject) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
