import {MealUpdateQuery} from "./meal-update-query";
import {MealUpdateObject} from "./meal-update-object";
import {Context} from "../context";
import {Dish} from "../dish/dish";

export class Meal {

  outdated = false;
  get query() {
    return new MealUpdateQuery(this);
  }

  private _update?:MealUpdateObject;
  get update() {
    return this._update ?? (this._update = new MealUpdateObject(this));
  }

  id!: number;
  programId!: number;
  title!: string;
  imageUrl?: string;
  caption?: string;
  description?: string;

  get dishes(): Dish[] {
    return this.context.dishes.filter(d => d.mealId === this.id);
  }

  get allPrograms() {
    return this.context.programs;
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  resetUpdate() {
    this._update = undefined;
  }
}
