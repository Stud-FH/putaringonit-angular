import {DishSelectionUpdateQuery} from "./dish-selection-update-query";
import {DishSelectionUpdateObject} from "./dish-selection-update-object";
import {Context} from "../context";
import {Meal} from "../meal/meal";

export class DishSelection {

  outdated = false;
  get updateQuery() {
    return new DishSelectionUpdateQuery(this);
  }

  private _update?:DishSelectionUpdateObject;
  get update() {
    return this._update ?? (this._update = new DishSelectionUpdateObject(this));
  }

  id!: number;
  mealId!: number;

  dishId?: number;
  comment?: string;

  get meal(): Meal {
    return this.context.mealRegistry[this.mealId];
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  resetUpdate() {
    this._update = undefined;
  }
}
