import {Invitation} from "./invitation";

export class InvitationUpdateObject {

  get query() {
    return this.parent.updateQuery;
  }

  accepted: boolean | null;
  get acceptedChanged() {
    return this.accepted !== (this.parent.accepted ?? null);
  }

  get program() {
    return this.parent.program;
  }

  get programId() {
    return this.parent.programId
  }

  get profileId() {
    return this.parent.profileId
  }

  constructor(private parent: Invitation) {
    this.accepted = parent.accepted ?? null;
  }

  invalidate() {
    this.parent.resetUpdate();
  }

}
