import {DishSelection} from "./dish-selection";

export class DishSelectionUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: DishSelection) {
    data.outdated = true;
    this.data = {
      dishId: data.update.dishId,
      comment: data.update.comment,
    }

    if (data.update.dishIdChanged) this.updates.push('dishId');
    if (data.update.commentChanged) this.updates.push('comment');
  }
}
