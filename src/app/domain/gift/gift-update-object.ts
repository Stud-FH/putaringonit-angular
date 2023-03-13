import {Gift} from "./gift";

export class GiftUpdateObject {

  get query() {
    return this.parent.updateQuery;
  }

  id?: number;
  donorId!: string;
  wishId!: number;
  status!: 'Reserved' | 'Paid' | 'Delivered';
  handoverOption!: 'Monetary' | 'Product';
  get handoverOptionChanged() {
    return this.handoverOption !== (this.parent.handoverOption);
  }

  value: number;

  comment: string;
  get commentChanged() {
    return this.comment !== (this.parent.comment ?? '');
  }

  get wish() {
    return this.parent.wish;
  }

  constructor(private parent: Gift) {
    this.id = parent.id;
    this.donorId = parent.donorId;
    this.wishId = parent.wishId;
    this.status = parent.status;
    this.handoverOption = parent.handoverOption ?? 'Monetary';
    this.value = parent.value ?? 0;
    this.comment = parent.comment ?? '';
  }
}
