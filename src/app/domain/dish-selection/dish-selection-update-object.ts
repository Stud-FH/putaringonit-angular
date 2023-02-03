import {DishSelection} from "./dish-selection";

export class DishSelectionUpdateObject {

  id?: number;

  dishId!: number;
  get dishIdChanged() {
    return this.dishId !== (this.parent.dishId ?? 0);
  }

  comment!: string;
  get commentChanged() {
    return this.comment !== (this.parent.comment ?? '');
  }

  get changed() {
    return this.dishIdChanged || this.commentChanged;
  }

  get meal() {
    return this.parent.meal;
  }

  constructor(private parent: DishSelection) {
    this.dishId = parent.dishId ?? 0;
    this.comment = parent.comment ?? '';
  }

  invalidate() {
    this.parent.resetUpdate();
  }
}
