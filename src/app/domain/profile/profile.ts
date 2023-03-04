import {ProfileUpdateObject} from "./profile-update-object";
import {ProfileUpdateQuery} from "./profile-update-query";
import {Invitation} from "../invitation/invitation";
import {Program} from "../program/program";
import {DishSelection} from "../dish-selection/dish-selection";
import {Context} from "../context";
import {Meal} from "../meal/meal";

export class Profile {

  outdated = false;
  get query() {
    this.outdated = true;
    return new ProfileUpdateQuery(this);
  }

  private _update?: ProfileUpdateObject;
  get update() {
    return this._update ?? (this._update = new ProfileUpdateObject(this));
  }

  invitationRegistry: { [key: number]: Invitation } = {};
  get invitations() {
    return Object.values(this.invitationRegistry);
  }

  dishSelectionRegistry: { [key: number]: DishSelection } = {};
  get dishSelections() {
    return Object.values(this.dishSelectionRegistry);
  }

  isAdmin = false;

  identifier!: string;
  firstName!: string;
  familyName!: string;

  nickname?: string;
  email?: string;
  blockEmail?: boolean;

  get availablePrograms(): Program[] {
    return this.context.programs.filter(p => this.invitations.map(i => i.programId).includes(p.id));
  }

  get acceptedPrograms() {
    return this.context.programs.filter(p => this.invitations.filter(i => i.accepted).map(i => i.programId).includes(p.id));
  }

  get availableMeals(): Meal[] {
    return this.context.meals.filter(m => this.acceptedPrograms.map(p => p.id).includes(m.programId));
  }

  get emailTodoCount(): number {
    return !this.blockEmail && !this.email? 1 : 0;
  }

  get dataTodoCount(): number {
    return this.emailTodoCount;
  }

  get invitationTodoCount(): number {
    return this.invitations.map(i => i.todoCount).reduce((a,b) => a+b, 0);
  }

  get mealTodoCount(): number {
    return this.availableMeals.filter(m => !this.dishSelectionRegistry[m.id]).length;
  }

  todoCount() {
    return this.dataTodoCount + this.mealTodoCount + this.invitationTodoCount;
  }

  isInvited(programId: number) {
    return this.invitations.map(p => p.programId).includes(programId);
  }

  isEnrolled(programId?: number) {
    const accepted = this.invitations.filter(i => i.accepted).map(p => p.programId);
    return programId? accepted.includes(programId) : accepted.length;
  }

  findDishSelection(meal: Meal): DishSelection | undefined {
    return this.dishSelectionRegistry[meal.id]
  }

  constructor(private context: Context, model: Profile) {
    this.isAdmin = model.isAdmin ?? false;
    this.identifier = model.identifier;
    this.firstName = model.firstName;
    this.familyName = model.familyName;
    this.nickname = model.nickname;
    this.email = model.email;
    this.blockEmail = model.blockEmail;

    model.invitations.forEach(i => this.registerInvitation(i));
    model.dishSelections.forEach(ds => this.registerDishSelection(ds));
  }

  registerInvitation(invitation: Invitation) {
    this.invitationRegistry[invitation.programId] = new Invitation(this.context, invitation)
  }

  registerDishSelection(dishSelection: DishSelection) {
    this.dishSelectionRegistry[dishSelection.mealId] = new DishSelection(this.context, dishSelection)
  }

  deleteInvitation(program: Program) {
    delete this.invitationRegistry[program.id];
  }
}
