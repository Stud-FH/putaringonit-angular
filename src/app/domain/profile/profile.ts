import {ProfileUpdateObject} from "./profile-update-object";
import {ProfileUpdateQuery} from "./profile-update-query";
import {Invitation} from "../invitation/invitation";
import {Program} from "../program/program";
import {DishSelection} from "../dish-selection/dish-selection";
import {Context} from "../context";
import {Meal} from "../meal/meal";

export class Profile {

  outdated = false;
  get updateQuery() {
    this.outdated = true;
    return new ProfileUpdateQuery(this);
  }

  private _update?: ProfileUpdateObject;
  get update() {
    return this._update ?? (this._update = new ProfileUpdateObject(this));
  }

  invitationRegistry!: { [key: number]: Invitation };
  get invitations() {
    return Object.values(this.invitationRegistry);
  }

  dishSelectionRegistry!: { [key: number]: DishSelection };
  get dishSelections() {
    return Object.values(this.dishSelectionRegistry);
  }

  isAdmin = false;

  identifier?: string;
  firstName = '';
  familyName = '';

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
    return this.context.meals.filter(this.findDishSelection).length;
  }

  todoCount(filter?: string) {
    let count = 0;
    if (!filter || ['email'].includes(filter)) count += !this.blockEmail && !this.email? 1 : 0;
    if (!filter || ['invitations'].includes(filter)) count += this.invitations.filter(i => i.accepted === undefined || i.accepted === null).length;
    // if (!filter || ['meals'].includes(filter)) count += this.availableMeals.filter(i => !i.selection).length;
    return count;
  }

  isInvited(programId: number) {
    return this.invitations.map(p => p.programId).includes(programId);
  }

  isEnrolled(programId?: number) {
    const accepted = this.invitations.filter(i => i.accepted).map(p => p.programId);
    return programId? accepted.includes(programId) : accepted.length;
  }

  findDishSelection(meal: Meal): DishSelection | undefined {
    return this.dishSelections.filter(ds => ds.mealId == meal.id)[0];
  }

  constructor(private context: Context, model?: any) {
    Object.assign(this, model);

    model?.invitations?.forEach(this.registerInvitation)
    model?.dishSelections?.forEach(this.registerDishSelection)
  }

  registerInvitation(invitation: Invitation) {
    this.invitationRegistry[invitation.programId!] = new Invitation(this.context, invitation)
  }

  registerDishSelection(dishSelection: DishSelection) {
    this.dishSelectionRegistry[dishSelection.id!] = new DishSelection(this.context, dishSelection)
  }

  deleteInvitation(program: Program) {
    delete this.invitationRegistry[program.id];
  }
}
