import {Gift} from "./gift";

export class GiftUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Gift) {
    data.outdated = true;
    this.data = {
      handoverOption: data.update.handoverOption,
      value: data.update.value,
      comment: data.update.comment,
    }

    if (data.update.handoverOptionChanged) this.updates.push('handoverOption');
    if (data.update.commentChanged) this.updates.push('comment');
  }
}
