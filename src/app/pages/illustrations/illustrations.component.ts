import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent {

  @Input() profile!: Profile;

}
