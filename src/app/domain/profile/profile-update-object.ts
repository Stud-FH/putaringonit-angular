import {Profile} from "./profile";

export class ProfileUpdateObject {

  private _parent: Profile;

  get updateQuery() {
    return this._parent.updateQuery;
  }

  isAdmin = false;

  id?: string;

  firstName: string;
  get firstNameChanged() {
    return this.firstName !== (this._parent.firstName);
  }
  familyName: string;
  get familyNameChanged() {
    return this.familyName !== (this._parent.familyName);
  }
  nickname: string;
  get nicknameChanged() {
    return this.nickname !== (this._parent.nickname ?? '');
  }
  email: string;
  get emailChanged() {
    return this.email !== (this._parent.email ?? '');
  }
  blockEmail: boolean;
  get blockEmailChanged() {
    return this.blockEmail !== (this._parent.blockEmail ?? false);
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

  constructor(parent: Profile) {
    this._parent = parent;
    this.isAdmin = parent.isAdmin;
    this.id = parent.identifier;
    this.firstName = parent.firstName
    this.familyName = parent.familyName
    this.nickname = parent.nickname ?? '';
    this.email = parent.email ?? '';
    this.blockEmail = parent.blockEmail ?? false;
  }
}
