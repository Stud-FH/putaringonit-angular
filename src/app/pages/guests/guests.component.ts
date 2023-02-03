import {Component} from '@angular/core';
import {Program} from "../../domain/program/program";
import {ProgramService} from "../../domain/program/program.service";
import {ProfileService} from "../../domain/profile/profile.service";
import {Profile} from "../../domain/profile/profile";
import {InvitationService} from "../../domain/invitation/invitation.service";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent {

  get displayedColumns() {
    if (!this.programs) return ['name'];
    return ['name'].concat(this.programs.map(p => p.title));
  }

  mode = 'edit';

  programs!: Program[];
  profiles!: Profile[];

  constructor(private programService: ProgramService, private profileService: ProfileService, private invitationService: InvitationService) {
  }

  setInvited(profile: Profile, program: Program, b: boolean) {
    if (b) {
      this.invitationService.create(profile, program)
        .subscribe(profile.registerInvitation)
    } else {
      this.invitationService.delete(profile, program)
        .subscribe(_ => profile.deleteInvitation(program))
    }
  }
}
