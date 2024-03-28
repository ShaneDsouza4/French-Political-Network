import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
  ],
  templateUrl: './warning-modal.component.html',
  styleUrl: './warning-modal.component.css'
})
export class WarningModalComponent {

  inputData:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<WarningModalComponent>){
    this.inputData = this.data
  }

  submit(){
    this.ref.close("Confirm");
  }

  closepopup(){
    this.ref.close("NotConfirm");
  }
}
