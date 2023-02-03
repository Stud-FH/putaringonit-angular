import {Gift} from "./gift";

export class GiftUpdateObject {

  get updateQuery() {
    return this.parent.updateQuery;
  }

  value: number;
  get valueChanged() {
    return this.value !== (this.parent.value ?? 0);
  }
  comment: string;
  get commentChanged() {
    return this.comment !== (this.parent.comment ?? '');
  }

  id?: number;
  donorId!: string;
  wishId!: number;
  status?: 'Reserved' | 'Paid' | 'Delivered';

  get wish() {
    return this.parent.wish;
  }

  constructor(private parent: Gift) {
    this.value = parent.value ?? 0;
    this.comment = parent.comment ?? '';
    this.id = parent.id;
    this.donorId = parent.donorId;
    this.wishId = parent.wishId;
    this.status = parent.status;
  }
}
