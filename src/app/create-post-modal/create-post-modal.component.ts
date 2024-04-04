import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { OpinionModalComponent } from '../opinion-modal/opinion-modal.component';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-post-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.css'
})
export class CreatePostModalComponent implements OnInit{

  postForm!:FormGroup
  inputData:any;
  postsList:any = [];
  loggedInDetails: any = {}
  loggedInUserID: any
  loggedIn: boolean = false;
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<OpinionModalComponent>, private _projectService: ProjectService){}

  

  ngOnInit(): void {

    //Login Logout Check
    let loggedInX = localStorage.getItem('loggedInUser')
    if (loggedInX !== null) {
      this.loggedInDetails = JSON.parse(loggedInX);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }

    //let postListX:any = localStorage.getItem('postsList');
    //this.postsList = JSON.parse(postListX);
    //this.inputData = this.data

    this.postForm = new FormGroup({
      'postDescription': new FormControl('', [RxwebValidators.required()]),
      'timestamp': new FormControl(new Date().toISOString()),
      'userId': new FormControl(this.loggedInUserID)
    })
  }

  submitPost(){
    console.log(this.postForm.getRawValue())
    let payLoad: any = this.postForm.getRawValue();
    this._projectService.postFeedback(payLoad).subscribe((res:any)=>{
      console.log('Feedback Posted: ', res)
    })
   // console.log(this.postForm.getRawValue())
    //this.postsList.unshift(this.postForm.getRawValue())
    //localStorage.setItem('postsList', JSON.stringify(this.postsList));
    //console.log("Post List: ", this.postsList);
    //this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
    //this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
    /* if(this.inputData.projectDetails.opinions.length !== undefined){
      this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
    }else{
      this.inputData.projectDetails.opinions.push(this.opinionForm.getRawValue())
    } */
    /* this._projectService.submitOpinion(this.opinionForm.getRawValue()).subscribe((res:any)=>{
      //this.projectObj = res.data
    }) */
    this.closepopup();
  }

  closepopup(){
    this.ref.close(this.postsList);
  }

}
