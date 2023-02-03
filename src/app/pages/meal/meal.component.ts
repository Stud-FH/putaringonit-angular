import {Component, Input} from '@angular/core';
import {Context} from "../../domain/context";
import {Profile} from "../../domain/profile/profile";
import {DishSelectionService} from "../../domain/dish-selection/dish-selection.service";
import {MatDialog} from "@angular/material/dialog";
import {Dish} from "../../domain/dish/dish";
import {Meal} from "../../domain/meal/meal";

@Component({
  selector: 'app-dish',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {

  @Input() context!: Context;
  @Input() profile!: Profile;
  @Input() meal!: Meal;

  get selection() {
    return this.profile.findDishSelection(this.meal);
  }

  constructor(private dishSelectionService: DishSelectionService, private dialog: MatDialog) {
  }

  open(dish: Dish) {
    // TODO
  }

}
