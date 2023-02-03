import {Wish} from "./wish";

export class WishUpdateObject {

  private _parent: Wish;

  id?: number;

  title!: string;
  get titleChanged() {
    return this.title !== (this._parent.title ?? '');
  }

  imageUrl!: string;
  get imageUrlChanged() {
    return this.imageUrl !== (this._parent.imageUrl ?? '');
  }

  caption!: string;
  get captionChanged() {
    return this.caption !== (this._parent.caption ?? '');
  }

  description!: string;
  get descriptionChanged() {
    return this.description !== (this._parent.description ?? '');
  }

  unit!: 'Piece' | 'CHF';
  get unitChanged() {
    return this.unit !== (this._parent.unit ?? 'CHF');
  }

  value!: number;
  get valueChanged() {
    return this.value !== (this._parent.value ?? 1);
  }

  constructor(parent: Wish) {
    this._parent = parent;
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
    this.unit = parent.unit ?? 'CHF';
    this.value = parent.value ?? 1;
  }

  invalidate() {
    this._parent.resetUpdate();
  }
}
