import {Invitation} from "./invitation";
import {Program} from "../program/program";

export class InvitationUpdateObject {

  private _parent: Invitation;

  get updateQuery() {
    return this._parent.updateQuery;
  }

  program?: Program;

  accepted: boolean | null;
  get acceptedChanged() {
    return this.accepted !== (this._parent.accepted ?? null);
  }

  constructor(parent: Invitation) {
    this._parent = parent;
    Object.keys(parent ?? {}).forEach(
      key => {
        // @ts-ignore
        this[key] = parent[key];
      }
    )
    this.accepted = parent.accepted ?? null;
  }

  invalidate() {
    this._parent.resetUpdate();
  }

}
