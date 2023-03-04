import {Component, Input} from '@angular/core';
import {Context} from "../../domain/context";
import {Profile} from "../../domain/profile/profile";
import {DishSelectionService} from "../../domain/dish-selection/dish-selection.service";
import {MatDialog} from "@angular/material/dialog";
import {Meal} from "../../domain/meal/meal";
import {DishSelection} from "../../domain/dish-selection/dish-selection";
import {DishSelectionEditorComponent} from "../../dialogs/dish-selection-editor/dish-selection-editor.component";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss', '../shared/grid-styles.scss']
})
export class MealComponent {

  @Input() context!: Context;
  @Input() profile!: Profile;

  constructor(private dishSelectionService: DishSelectionService, private dialog: MatDialog) {
  }

  open(meal: Meal) {
    const updateObj = (
      this.profile.findDishSelection(meal)
      ?? new DishSelection(this.context, {mealId: meal.id})
    ).update;

    const dialogRef = this.dialog.open(DishSelectionEditorComponent, {
      data: updateObj,
    });

    dialogRef.afterClosed().subscribe(submitted => {
      if (submitted) {
        this.dishSelectionService.select(submitted, this.profile)
          .subscribe(res => this.profile.registerDishSelection(res));
      }
    });
  }

}
