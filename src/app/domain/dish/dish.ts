import {DishUpdateQuery} from "./dish-update-query";
import {DishUpdateObject} from "./dish-update-object";
import {Context} from "../context";

export class Dish {

  outdated = false;
  get updateQuery() {
    return new DishUpdateQuery(this);
  }

  private _update?:DishUpdateObject;
  get update() {
    return this._update ?? (this._update = new DishUpdateObject(this));
  }

  id?: number;
  mealId?: number;
  title!: string;
  imageUrl?: string;
  caption?: string;
  description?: string;

  get allMeals() {
    return this.context.meals;
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  resetUpdate() {
    this._update = undefined;
  }
}
