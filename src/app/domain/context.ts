import {Program} from "./program/program";
import {Gift} from "./gift/gift";
import {Wish} from "./wish/wish";
import {Dish} from "./dish/dish";
import {Meal} from "./meal/meal";

export class Context {

  programRegistry!: { [key: number]: Program };
  get programs() {
    return Object.values(this.programRegistry);
  }

  mealRegistry!: { [key: number]: Meal };
  get meals() {
    return Object.values(this.mealRegistry);
  }

  dishRegistry!: { [key: number]: Dish };
  get dishes() {
    return Object.values(this.dishRegistry);
  }

  wishRegistry!: { [key: number]: Wish };
  get wishes() {
    return Object.values(this.wishRegistry);
  }

  giftRegistry!: { [key: number]: Gift };
  get gifts() {
    return Object.values(this.giftRegistry);
  }

  constructor(model?: any) {
    Object.assign(this, model);

    model?.programs?.forEach(this.registerProgram)
    model?.meals?.forEach(this.registerMeal)
    model?.dishes?.forEach(this.registerDish)
    model?.wishes?.forEach(this.registerWish)
    model?.gifts?.forEach(this.registerGift)
  }

  registerProgram(program: Program) {
    this.programRegistry[program.id!] = new Program(this, program);
  }

  registerMeal(meal: Meal) {
    this.mealRegistry[meal.id!] = new Meal(this, meal)
  }

  registerDish(dish: Dish) {
    this.dishRegistry[dish.id!] = new Dish(this, dish);
  }

  registerWish(wish: Wish) {
    this.wishRegistry[wish.id!] = new Wish(this, wish);
  }

  registerGift(gift: Gift) {
    this.giftRegistry[gift.id!] = new Gift(this, gift);
  }

}
