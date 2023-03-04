import {Profile} from "./profile";

export class ProfileUpdateObject {

  get query() {
    return this.parent.query;
  }

  isAdmin = false;

  get id() {
    return this.parent.identifier;
  }

  firstName: string;
  get firstNameChanged() {
    return this.firstName !== (this.parent.firstName);
  }
  familyName: string;
  get familyNameChanged() {
    return this.familyName !== (this.parent.familyName);
  }
  nickname: string;
  get nicknameChanged() {
    return this.nickname !== (this.parent.nickname ?? '');
  }
  email: string;
  get emailChanged() {
    return this.email !== (this.parent.email ?? '');
  }
  blockEmail: boolean;
  get blockEmailChanged() {
    return this.blockEmail !== (this.parent.blockEmail ?? false);
  }
  gifts: any[] = [];
  roles: string[] = [];

  get changed() {
    return (
      this.firstNameChanged ||
      this.familyNameChanged ||
      this.nicknameChanged ||
      this.emailChanged ||
      this.blockEmailChanged
    );
  }

  get emailMissing() {
    return !this.blockEmail && !this.email;
  }

  constructor(private parent: Profile) {
    this.isAdmin = parent.isAdmin;
    this.firstName = parent.firstName
    this.familyName = parent.familyName
    this.nickname = parent.nickname ?? '';
    this.email = parent.email ?? '';
    this.blockEmail = parent.blockEmail ?? false;
  }
}
