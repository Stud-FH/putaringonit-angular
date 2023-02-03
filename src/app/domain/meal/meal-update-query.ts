import {Meal} from "./meal";

export class MealUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Meal) {
    data.outdated = true;
    this.data = {
      programId: data.update.programId,
      title: data.update.title,
      imageUrl: data.update.imageUrl,
      caption: data.update.caption,
      description: data.update.description,
    }

    if (data.update.programIdChanged) this.updates.push('programId');
    if (data.update.titleChanged) this.updates.push('title');
    if (data.update.imageUrlChanged) this.updates.push('imageUrl');
    if (data.update.captionChanged) this.updates.push('caption');
    if (data.update.descriptionChanged) this.updates.push('description');
  }
}
