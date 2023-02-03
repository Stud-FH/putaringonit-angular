import {Profile} from "./profile";

export class ProfileUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(profile: Profile) {
    profile.outdated = true;
    this.data = {
      firstName: profile.update.firstName,
      familyName: profile.update.familyName,
      nickname: profile.update.nickname,
      email: profile.update.email,
      blockEmail: profile.update.blockEmail,
      gifts: profile.update.gifts,
      roles: profile.update.roles,
    }

    if (profile.update.nicknameChanged) this.updates.push('nickname');
    if (profile.update.emailChanged) this.updates.push('email');
    if (profile.update.blockEmailChanged) this.updates.push('blockEmail');
  }

}
