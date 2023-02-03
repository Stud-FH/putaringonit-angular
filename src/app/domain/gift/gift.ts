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

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }
}
