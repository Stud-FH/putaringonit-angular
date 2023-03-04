import {Profile} from "../profile/profile";
import {Context} from "../context";

export class Account {

  profileRegistry: { [key: string]: Profile } = {};
  get profiles() {
    return Object.values(this.profileRegistry);
  }

  id!: number;
  clearance!: string;
  token!: string;
  context!: Context;

  constructor(model: Account) {
    this.id = model.id;
    this.clearance = model.clearance;
    this.token = model.token;
    this.context = new Context(model.context);
    model.profiles.forEach(p => this.registerProfile(p));
  }

  registerProfile(profile: Profile) {
    profile.isAdmin = this.clearance === 'Admin';
    this.profileRegistry[profile.identifier] = new Profile(this.context, profile)
    return this.profileRegistry[profile.identifier];
  }


}
