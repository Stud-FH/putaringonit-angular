import {Gift} from "../gift/gift";
import {WishUpdateQuery} from "./wish-update-query";
import {WishUpdateObject} from "./wish-update-object";
import {Context} from "../context";

export class Wish {

  outdated = false;
  get query() {
    return new WishUpdateQuery(this);
  }

  private _update?:WishUpdateObject;
  get update() {
    return this._update ?? (this._update = new WishUpdateObject(this));
  }

  id!: number;
  title!: string;
  imageUrl?: string;
  productUrl?: string;
  caption?: string;
  description?: string;
  unit!: 'Piece' | 'CHF';
  value?: number;
  hideProgress!: boolean;

  get gifts() {
    return this.context.gifts.filter(g => g.wishId === this.id);
  }

  get accumulated(): number {
    if (!this.gifts.length) return 0;
    return this.gifts.map(g => g.value).reduce((a, b) => ((a??0) + (b??0))) ?? 0;
  }

  get progress(): number {
    return this.value? this.accumulated / (this.value) : 0;
  }

  get progressText(): string {
    switch(this.unit) {
      case 'CHF':
        return `CHF ${this.accumulated} / CHF ${this.value}`;
      case 'Piece':
        return `${this.accumulated} / ${this.value}`;
      default: return '';
    }
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  giftOf(profileId: string): Gift | undefined {
    return this.gifts.filter(g => g.donorId === profileId)[0];
  }

  accumulatedExceptFrom(profileId: string): number {
    const filtered = this.gifts.filter(g => g.donorId !== profileId);
    if (!filtered.length) return 0;
    return filtered
      .map(g => g.value)
      .reduce((a, b) => ((a??0) + (b??0)))
      ?? 0;
  }

  progressExceptFrom(profileId: string) {
    return this.value? this.accumulatedExceptFrom(profileId) / this.value : 0;
  }

  resetUpdate() {
    this._update = undefined;
  }

  toString() {
    return this.caption;
  }
}
