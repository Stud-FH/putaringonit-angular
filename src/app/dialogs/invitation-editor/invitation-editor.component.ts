import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InvitationUpdateObject} from "../../domain/invitation/invitation-update-object";

@Component({
  selector: 'app-invitation-editor',
  templateUrl: './invitation-editor.component.html',
  styleUrls: ['./invitation-editor.component.scss', '../dialog-styles.scss']
})
export class InvitationEditorComponent {

  get statusText() {
    switch(this.data.accepted) {
      case true: return 'Wir freuen uns auf dich!';
      case false: return 'Schade :(';
      default: return 'Du bist herzlich eingeladen!';
    }
  }

  get ready() {
    switch(this.data.accepted) {
      case true:
      case false: return true;
      default: return false;
    }
  }

  constructor(public dialogRef: MatDialogRef<InvitationEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: InvitationUpdateObject) { }

  cancel(): void {
    this.data.invalidate();
    this.dialogRef.close();
  }
}
