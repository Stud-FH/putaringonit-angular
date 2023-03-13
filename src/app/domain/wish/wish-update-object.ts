import {Wish} from "./wish";

export class WishUpdateObject {

  get query() {
    return this.parent.query;
  }

  title!: string;
  get titleChanged() {
    return this.title !== (this.parent.title ?? '');
  }

  imageUrl!: string;
  get imageUrlChanged() {
    return this.imageUrl !== (this.parent.imageUrl ?? '');
  }

  productUrl!: string;
  get productUrlChanged() {
    return this.productUrl !== (this.parent.productUrl ?? '');
  }

  caption!: string;
  get captionChanged() {
    return this.caption !== (this.parent.caption ?? '');
  }

  description!: string;
  get descriptionChanged() {
    return this.description !== (this.parent.description ?? '');
  }

  unit!: 'Piece' | 'CHF';
  get unitChanged() {
    return this.unit !== (this.parent.unit ?? 'CHF');
  }

  isPhysical!: boolean;
  get isPhysicalChanged() {
    return this.isPhysical !== (this.parent.isPhysical ?? false);
  }

  value?: number;
  get valueChanged() {
    return this.value !== this.parent.value;
  }

  hideProgress!: boolean;
  get hideProgressChanged() {
    return this.hideProgress !== (this.parent.hideProgress ?? false);
  }

  get id() {
    return this.parent.id;
  }

  get changed() {
    return this.titleChanged
      || this.imageUrlChanged
      || this.captionChanged
      || this.descriptionChanged
      || this.unitChanged
      || this.valueChanged
  }

  constructor(private parent: Wish) {
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.productUrl = parent.productUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
    this.unit = parent.unit ?? 'CHF';
    this.isPhysical = parent.isPhysical ?? false;
    this.value = parent.value;
    this.hideProgress = parent.hideProgress ?? false;

  }

  invalidate() {
    this.parent.resetUpdate();
  }
}
