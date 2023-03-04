import {InvitationUpdateQuery} from "./invitation-update-query";
import {InvitationUpdateObject} from "./invitation-update-object";
import {Context} from "../context";

export class Invitation {

  outdated = false;
  get updateQuery() {
    this.outdated = true;
    return new InvitationUpdateQuery(this);
  }

  private _update?: InvitationUpdateObject;
  get update() {
    return this._update ?? (this._update = new InvitationUpdateObject(this));
  }

  id!: number;
  profileId!: string;
  programId!: number;
  accepted?: boolean;

  get todoCount(): number {
    return this.accepted === undefined || this.accepted === null ? 1 : 0;
  }

  get program() {
    return this.context.programRegistry[this.programId]
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);
  }

  resetUpdate() {
    this._update = undefined;
  }
}
