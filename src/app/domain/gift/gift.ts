import {GiftUpdateQuery} from "./gift-update-query";
import {GiftUpdateObject} from "./gift-update-object";
import {Context} from "../context";

export class Gift {

  outdated = false;
  get updateQuery() {
    return new GiftUpdateQuery(this);
  }

  private _update?: GiftUpdateObject;
  get update() {
    return this._update ?? (this._update = new GiftUpdateObject(this));
  }

  id!: number;
  donorId!: string;
  wishId!: number;
  status!: 'Reserved' | 'Paid' | 'Delivered';

  value!: number;
  comment?: string;

  get wish() {
    return this.context.wishRegistry[this.wishId];
  }

  get contributionText() {
    let status;
    switch (this.status) {
      case 'Reserved':
        status = 'reserviert';
        break;
      case 'Paid':
        status = 'finanziert';
        break;
      case 'Delivered':
        status = 'beigetragen';
        break;
      default: return '';
    }

    switch(this.wish.unit) {
      case 'CHF':
        return `Du hast CHF ${this.value} ${status}.`;
      case 'Piece':
        return `Du hast ${this.value} Stück ${status}.`;
      default: return '';
    }
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }
}
