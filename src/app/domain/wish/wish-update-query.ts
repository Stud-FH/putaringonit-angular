import {Wish} from "./wish";

export class WishUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Wish) {
    data.outdated = true;
    this.data = {
      title: data.update.title,
      imageUrl: data.update.imageUrl,
      caption: data.update.caption,
      description: data.update.description,
      unit: data.update.unit,
      value: data.update.value,
    }

    if (data.update.titleChanged) this.updates.push('title');
    if (data.update.imageUrlChanged) this.updates.push('imageUrl');
    if (data.update.captionChanged) this.updates.push('caption');
    if (data.update.descriptionChanged) this.updates.push('description');
    if (data.update.unitChanged) this.updates.push('unit');
    if (data.update.valueChanged) this.updates.push('value');
  }
}
