import {Component, Input} from '@angular/core';
import {Context} from "../../domain/context";
import {Dish} from "../../domain/dish/dish";
import {Wish} from "../../domain/wish/wish";
import {Program} from "../../domain/program/program";
import {MatDialog} from "@angular/material/dialog";
import {WishEditorComponent} from "../../dialogs/wish-editor/wish-editor.component";
import {WishService} from "../../domain/wish/wish.service";
import {ProgramService} from "../../domain/program/program.service";
import {DishService} from "../../domain/dish/dish.service";
import {DishEditorComponent} from "../../dialogs/dish-editor/dish-editor.component";
import {ProgramEditorComponent} from "../../dialogs/program-editor/program-editor.component";
import {MealService} from "../../domain/meal/meal.service";
import {Meal} from "../../domain/meal/meal";
import {MealEditorComponent} from "../../dialogs/meal-editor/meal-editor.component";
import {Profile} from "../../domain/profile/profile";

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss', '../shared/grid-styles.scss']
})
export class ScopeComponent{

  @Input() profile!: Profile;
  @Input() context!: Context;

  modes = {
    programs: 'programs',
    meals: 'meals',
    dishes: 'dishes',
    wishes: 'wishes',
  }
  mode = this.modes.programs;

  constructor(
    private dialog: MatDialog,
    private programService: ProgramService,
    private mealService: MealService,
    private dishService: DishService,
    private wishService: WishService) {
  }

  editProgram(program: Program) {
    const dialogRef = this.dialog.open(ProgramEditorComponent, {data: program.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.programService.update(submitted, this.profile)
        .subscribe(res => this.context.registerProgram(res)));
  }

  createProgram() {
    const program = new Program(this.context, {title: 'Neues Programm'});
    const dialogRef = this.dialog.open(ProgramEditorComponent, {data: program.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.programService.create(submitted, this.profile)
        .subscribe(res => this.context.registerProgram(res)));
  }

  editMeal(meal: Meal) {
    const dialogRef = this.dialog.open(MealEditorComponent, {data: meal.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.mealService.update(submitted, this.profile)
        .subscribe(res => this.context.registerMeal(res)));
  }

  createMeal() {
    const meal = new Meal(this.context, {title: 'Neue Mahlzeit'});
    const dialogRef = this.dialog.open(MealEditorComponent, {data: meal.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.mealService.create(submitted, this.profile)
        .subscribe(res => this.context.registerMeal(res)));
  }

  editDish(dish: Dish) {
    const dialogRef = this.dialog.open(DishEditorComponent, {data: dish.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.dishService.update(submitted, this.profile)
        .subscribe(res => this.context.registerDish(res)));
  }

  createDish() {
    const dish = new Dish(this.context, {title: 'Neues Menu'});
    const dialogRef = this.dialog.open(DishEditorComponent, {data: dish.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.dishService.create(submitted, this.profile)
        .subscribe(res => this.context.registerDish(res)));
  }

  editWish(wish: Wish) {
    const dialogRef = this.dialog.open(WishEditorComponent, {data: wish.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.wishService.update(submitted, this.profile)
        .subscribe(res => this.context.registerWish(res)));
  }

  createWish() {
    const wish = new Wish(this.context, {title: 'Neuer Wunsch'});
    const dialogRef = this.dialog.open(WishEditorComponent, {data: wish.update});

    dialogRef.afterClosed()
      .subscribe(submitted => this.wishService.create(submitted, this.profile)
        .subscribe(res => this.context.registerWish(res)));
  }

}
