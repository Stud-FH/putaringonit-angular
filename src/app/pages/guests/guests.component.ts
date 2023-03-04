import {Component, Input, OnInit} from '@angular/core';
import {Program} from "../../domain/program/program";
import {ProgramService} from "../../domain/program/program.service";
import {ProfileService} from "../../domain/profile/profile.service";
import {Profile} from "../../domain/profile/profile";
import {InvitationService} from "../../domain/invitation/invitation.service";
import {Context} from "../../domain/context";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

  get displayedColumns() {
    return ['name'].concat(this.context.programs.map(p => p.title));
  }

  modes = {
    edit: 'edit',
    invite: 'invite',
    access: 'access',
  }

  mode = this.modes.edit;

  @Input() context!: Context;
  profiles: Profile[] = [];

  constructor(private programService: ProgramService, private profileService: ProfileService, private invitationService: InvitationService) {
  }

  ngOnInit() {
    this.profileService.getAll(this.context).subscribe(res => this.profiles = res);
  }

  setInvited(profile: Profile, program: Program, b: boolean) {
    if (b) {
      this.invitationService.create(program.id, profile.identifier)
        .subscribe(res => profile.registerInvitation(res))
    } else {
      this.invitationService.delete(program.id, profile.identifier)
        .subscribe(_ => profile.deleteInvitation(program))
    }
  }
}
