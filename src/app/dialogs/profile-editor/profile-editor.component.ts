import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProfileUpdateObject} from "../../domain/profile/profile-update-object";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss', '../dialog-styles.scss']
})
export class ProfileEditorComponent {


  constructor(public dialogRef: MatDialogRef<ProfileEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: ProfileUpdateObject) { }

  cancel(): void {
    // this.data.invalidate();
    this.dialogRef.close();
  }
}
