import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";
import {Program} from "../../domain/program/program";
import {MatDialog} from "@angular/material/dialog";
import {Invitation} from "../../domain/invitation/invitation";
import {InvitationEditorComponent} from "../../dialogs/invitation-editor/invitation-editor.component";
import {InvitationService} from "../../domain/invitation/invitation.service";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss', '../shared/grid-styles.scss']
})
export class ProgramComponent {

  @Input() profile!: Profile;
  @Input() programs!: Program[];

  get displayedPrograms() {
    return this.profile.isAdmin? this.programs :
      this.programs.filter(p => this.profile.invitations.map(i => i.programId).includes(p.id));
  }

  constructor(private invitationService: InvitationService, public dialog: MatDialog) {
  }

  open(program: Program) {
    const updateObj = this.invitationOf(program)?.update;
    if (!updateObj) return;

    const dialogRef = this.dialog.open(InvitationEditorComponent, {
      data: updateObj,
    });

    dialogRef.afterClosed().subscribe(submitted => {
      if (submitted) {
        this.invitationService.update(submitted, this.profile)
          .subscribe(res => this.profile.registerInvitation(res));
      }
    });
  }

  statusIcon(program: Program) {
    switch (this.invitationOf(program)?.accepted) {
      case true:
        return 'done';
      case false:
        return 'clear';
      default:
        return 'outlined_flag'
    }
  }

  todoCount(program: Program) {
    const invitation = this.invitationOf(program);
    if (!invitation) return 0;
    switch (invitation.accepted) {
      case true:
      case false:
        return 0;
      default:
        return 1;
    }
  }

  invitationOf(program: Program): Invitation | undefined {
    return this.profile.invitations.filter(i => i.programId == program.id)[0];
  }

  programOf(invitation: Invitation): Program {
    return this.programs.filter(p => p.id == invitation.programId)[0];
  }

}
