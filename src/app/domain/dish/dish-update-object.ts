import {Dish} from "./dish";

export class DishUpdateObject {

  get query() {
    return this.parent.updateQuery;
  }

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

  get id() {
    return this.parent.id;
  }

  get changed() {
    return this.mealIdChanged
      || this.titleChanged
      || this.imageUrlChanged
      || this.captionChanged
      || this.descriptionChanged
  }

  get allMeals() {
    return this.parent.allMeals;
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
