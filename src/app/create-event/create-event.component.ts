import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../service/event.service';
import { NumericValueType, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { ProjectService } from '../service/project.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {

  createEventForm!: FormGroup
  cities:any = cities
  loggedInUserID: any
  loggedInDetails: any = {}
  loggedIn: boolean = false
  incompleteForm: boolean = false
  spinner: boolean = false

  constructor(private _EventService: EventService, private _projectService: ProjectService){ }

  ngOnInit(): void {

    //Login Logout Check
    let loggedIn = localStorage.getItem('loggedInUser')
    if (loggedIn !== null) {
      this.loggedInDetails = JSON.parse(loggedIn);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
    
    this.createEventForm = new FormGroup({
      eventName:  new FormControl('', [RxwebValidators.required()]),
      eventStart: new FormControl('', [RxwebValidators.required()]),
      eventEnd:  new FormControl('', [RxwebValidators.required()]),
      location: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl(null, [RxwebValidators.required()]),
      capacity: new FormControl('', [RxwebValidators.required()]),
      organizer: new FormControl('', [RxwebValidators.required()]),
      createdBy: new FormControl(this.loggedInUserID),
      price: new FormControl(null),
    })


  }

  submit(){
    console.log(this.createEventForm)
    if(this.createEventForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      this.spinner = true
      this.incompleteForm = false
      let payLoad: any = this.createEventForm.getRawValue();
      this._projectService.createEvent(payLoad).subscribe((res:any)=>{
        if(res.status == 1){
          console.log('Response Added Sucessfully: ', res)
          this.spinner = false
          alert("Event Added Sucessfully.")
          this.reset();
        }else{
          this.spinner = false
        }
      })
      
    }
  }

  reset(){
    this.createEventForm.reset({})
  }

  uploadImage(event:any){
    
  }
}
