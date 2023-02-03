import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Program} from "../../domain/program/program";

@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
  styleUrls: ['./program-editor.component.scss', '../dialog-styles.scss']
})
export class ProgramEditorComponent {

  constructor(public dialogRef: MatDialogRef<ProgramEditorComponent>, @Inject(MAT_DIALOG_DATA) public data: Program) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
