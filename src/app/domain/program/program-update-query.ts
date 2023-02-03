import {Program} from "./program";

export class ProgramUpdateQuery {

  updates: string[] = [];
  data: any;

  constructor(data: Program) {
    data.outdated = true;
    this.data = {
      title: data.update.title,
      imageUrl: data.update.imageUrl,
      caption: data.update.caption,
      description: data.update.description,
      startTime: data.update.startTime,
      endTime: data.update.endTime,
    }

    if (data.update.titleChanged) this.updates.push('title');
    if (data.update.imageUrlChanged) this.updates.push('imageUrl');
    if (data.update.captionChanged) this.updates.push('caption');
    if (data.update.descriptionChanged) this.updates.push('description');
    if (data.update.startTimeChanged) this.updates.push('startTime');
    if (data.update.endTimeChanged) this.updates.push('endTime');
  }
}
