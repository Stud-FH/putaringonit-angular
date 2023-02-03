import {Program} from "./program";

export class ProgramUpdateObject {

  private _parent: Program;

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

  startTime!: string;
  get startTimeChanged() {
    return this.startTime !== (this._parent.startTime ?? '');
  }

  endTime!: string;
  get endTimeChanged() {
    return this.endTime !== (this._parent.endTime ?? '');
  }

  constructor(parent: Program) {
    this._parent = parent;
    this.title = parent.title ?? '';
    this.imageUrl = parent.imageUrl ?? '';
    this.caption = parent.caption ?? '';
    this.description = parent.description ?? '';
    this.startTime = parent.startTime ?? '';
    this.endTime = parent.endTime ?? '';
  }

  invalidate() {
    this._parent.resetUpdate();
  }
}
