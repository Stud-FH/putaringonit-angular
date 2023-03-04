import {Program} from "./program";

export class ProgramUpdateObject {

  get query() {
    return this.parent.query;
  }

  get id() {
    return this.parent.id;
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

  startTime!: string;
  get startTimeChanged() {
    return this.startTime !== (this.parent.startTime ?? '');
  }

  endTime!: string;
  get endTimeChanged() {
    return this.endTime !== (this.parent.endTime ?? '');
  }

  get changed() {
    return this.titleChanged
      || this.imageUrlChanged
      || this.captionChanged
      || this.descriptionChanged
      || this.startTimeChanged
      || this.endTimeChanged;
  }

  constructor(private parent: Program) {
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
    this.startTime = parent.startTime ?? '';
    this.endTime = parent.endTime ?? '';
  }

  invalidate() {
    this.parent.resetUpdate();
  }
}
