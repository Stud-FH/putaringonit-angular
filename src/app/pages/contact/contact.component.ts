import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() profile!: Profile;

}
