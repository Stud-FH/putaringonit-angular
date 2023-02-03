import {Dish} from "./dish";

export class DishUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Dish) {
    data.outdated = true;
    this.data = {
      mealId: data.update.mealId,
      title: data.update.title,
      imageUrl: data.update.imageUrl,
      caption: data.update.caption,
      description: data.update.description,
    }

    if (data.update.mealIdChanged) this.updates.push('mealId');
    if (data.update.titleChanged) this.updates.push('title');
    if (data.update.imageUrlChanged) this.updates.push('imageUrl');
    if (data.update.captionChanged) this.updates.push('caption');
    if (data.update.descriptionChanged) this.updates.push('description');
  }
}
