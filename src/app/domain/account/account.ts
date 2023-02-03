import {Profile} from "../profile/profile";
import {Context} from "../context";

export class Account {

  profileRegistry!: { [key: string]: Profile };
  get profiles() {
    return Object.values(this.profileRegistry);
  }

  id!: number;
  clearance!: string;
  name!: string;
  password?: string;
  token!: string;
  context!: Context;

  constructor(model?: Account) {
    Object.assign(this, model);
    this.context = new Context(model?.context);

    model?.profiles?.forEach(this.registerProfile)
  }

  registerProfile(profile: Profile) {
    profile.isAdmin = this.clearance === 'Admin';
    return this.profileRegistry[profile.identifier!] = new Profile(this.context, profile)
  }


}
