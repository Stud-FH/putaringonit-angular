import {Wish} from "./wish";

export class WishUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Wish) {
    data.outdated = true;
    this.data = {
      title: data.update.title,
      imageUrl: data.update.imageUrl,
      productUrl: data.update.productUrl,
      caption: data.update.caption,
      description: data.update.description,
      unit: data.update.unit,
      isPhysical: data.update.isPhysical,
      value: data.update.hideProgress? 0 : data.update.value,
      hideProgress: data.update.hideProgress,
    }

    if (data.update.titleChanged) this.updates.push('title');
    if (data.update.imageUrlChanged) this.updates.push('imageUrl');
    if (data.update.productUrlChanged) this.updates.push('productUrl');
    if (data.update.captionChanged) this.updates.push('caption');
    if (data.update.descriptionChanged) this.updates.push('description');
    if (data.update.unitChanged) this.updates.push('unit');
    if (data.update.isPhysicalChanged) this.updates.push('isPhysical');
    if (data.update.valueChanged || data.update.hideProgressChanged) this.updates.push('value');
    if (data.update.hideProgressChanged) this.updates.push('hideProgress');
  }
}
