import {Program} from "./program/program";
import {Gift} from "./gift/gift";
import {Wish} from "./wish/wish";
import {Dish} from "./dish/dish";
import {Meal} from "./meal/meal";

export class Context {

  programRegistry: { [key: number]: Program } = {};
  get programs() {
    return Object.values(this.programRegistry);
  }

  mealRegistry: { [key: number]: Meal } = {};
  get meals() {
    return Object.values(this.mealRegistry);
  }

  dishRegistry: { [key: number]: Dish } = {};
  get dishes() {
    return Object.values(this.dishRegistry);
  }

  wishRegistry: { [key: number]: Wish } = {};
  get wishes() {
    return Object.values(this.wishRegistry).sort().reverse();
  }

  giftRegistry: { [key: number]: Gift } = {};
  get gifts() {
    return Object.values(this.giftRegistry);
  }

  name!: string;

  constructor(model: Context) {
    this.name = model.name;
    model.programs.forEach(p => this.registerProgram(p))
    model.meals.forEach(m => this.registerMeal(m))
    model.dishes.forEach(d => this.registerDish(d))
    model.wishes.forEach(w => this.registerWish(w))
    model.gifts.forEach(g => this.registerGift(g))
  }

  registerProgram(program: Program) {
    return this.programRegistry[program.id!] = new Program(this, program);
  }

  registerMeal(meal: Meal) {
    return this.mealRegistry[meal.id!] = new Meal(this, meal)
  }

  registerDish(dish: Dish) {
    return this.dishRegistry[dish.id!] = new Dish(this, dish);
  }

  registerWish(wish: Wish) {
    return this.wishRegistry[wish.id!] = new Wish(this, wish);
  }

  registerGift(gift: Gift) {
    return this.giftRegistry[gift.id!] = new Gift(this, gift);
  }

  unregisterGift(gift: Gift) {
    delete this.giftRegistry[gift.id!];
  }

}
