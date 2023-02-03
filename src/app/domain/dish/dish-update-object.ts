import {Dish} from "./dish";

export class DishUpdateObject {

  id?: number;

  mealId!: number;
  get mealIdChanged() {
    return this.mealId !== (this.parent.mealId ?? 0);
  }

  title!: string;
  get titleChanged() {
    return this.title !== (this.parent.title ?? '');
  }

  imageUrl!: string;
  get imageUrlChanged() {
    return this.imageUrl !== (this.parent.imageUrl ?? '');
  }

  caption!: string;
  get captionChanged() {
    return this.caption !== (this.parent.caption ?? '');
  }

  description!: string;
  get descriptionChanged() {
    return this.description !== (this.parent.description ?? '');
  }

  constructor(private parent: Dish) {
    this.mealId = parent.mealId ?? 0;
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
  }

  invalidate() {
    this.parent.resetUpdate();
  }
}
