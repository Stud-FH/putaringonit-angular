import {Invitation} from "./invitation";

export class InvitationUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Invitation) {
    data.outdated = true;
    this.data = {
      accepted: data.update.accepted,
    }

    if (data.update.acceptedChanged) this.updates.push('accepted');
  }

}
