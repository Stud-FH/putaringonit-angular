import {ProgramUpdateQuery} from "./program-update-query";
import {ProgramUpdateObject} from "./program-update-object";
import {Context} from "../context";

export class Program {

  outdated = false;
  get query() {
    return new ProgramUpdateQuery(this);
  }

  private _update?:ProgramUpdateObject;
  get update() {
    return this._update ?? (this._update = new ProgramUpdateObject(this));
  }

  id!: number;
  title!: string;
  imageUrl?: string;
  caption?: string;
  description?: string;
  startTime?: string;
  endTime?: string;


  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  resetUpdate() {
    this._update = undefined;
  }
}
