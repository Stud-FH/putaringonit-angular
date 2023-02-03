import {Meal} from "./meal";

export class MealUpdateObject {

  id?: number;

  programId!: number;
  get programIdChanged() {
    return this.programId !== (this.parent.programId ?? 0);
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

  constructor(private parent: Meal) {
    this.programId = parent.programId ?? 0;
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
  }

  invalidate() {
    this.parent.resetUpdate();
  }
}
