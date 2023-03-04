import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProgramUpdateObject} from "../../domain/program/program-update-object";

@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
  styleUrls: ['./program-editor.component.scss', '../dialog-styles.scss']
})
export class ProgramEditorComponent {

  get ready() {
    return this.data.title && this.data.changed;
  }

  constructor(public dialogRef: MatDialogRef<ProgramEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: ProgramUpdateObject) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
