import {Gift} from "./gift";

export class GiftUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Gift) {
    data.outdated = true;
    this.data = {
      value: data.update.value,
      comment: data.update.comment,
    }

    if (data.update.valueChanged) this.updates.push('value');
    if (data.update.commentChanged) this.updates.push('comment');
  }
}
