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

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent{

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

    dialogRef.afterClosed().subscribe(submitted =>
      this.programService.update(submitted).subscribe(this.context.registerProgram));
  }

  createProgram() {
    const dialogRef = this.dialog.open(ProgramEditorComponent, {data: new Program(this.context).update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.programService.create(submitted).subscribe(this.context.registerProgram));
  }

  editMeal(meal: Meal) {
    const dialogRef = this.dialog.open(MealEditorComponent, {data: meal.update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.mealService.update(submitted).subscribe(this.context.registerMeal));
  }

  createMeal() {
    const dialogRef = this.dialog.open(MealEditorComponent, {data: new Meal(this.context).update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.mealService.create(submitted).subscribe(this.context.registerMeal));
  }

  editDish(dish: Dish) {
    const dialogRef = this.dialog.open(DishEditorComponent, {data: dish.update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.dishService.update(submitted).subscribe(this.context.registerDish));
  }

  createDish() {
    const dialogRef = this.dialog.open(DishEditorComponent, {data: new Dish(this.context).update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.dishService.create(submitted).subscribe(this.context.registerDish));
  }

  editWish(wish: Wish) {
    const dialogRef = this.dialog.open(WishEditorComponent, {data: wish.update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.wishService.update(submitted).subscribe(this.context.registerWish));
  }

  createWish() {
    const dialogRef = this.dialog.open(WishEditorComponent, {data: new Wish(this.context).update});

    dialogRef.afterClosed().subscribe(submitted =>
      this.wishService.create(submitted).subscribe(this.context.registerWish));
  }

}
