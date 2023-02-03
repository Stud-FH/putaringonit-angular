import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  @Input() profile!: Profile;

}
