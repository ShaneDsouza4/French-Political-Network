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
  minDate:any;

  constructor(private _EventService: EventService, private _projectService: ProjectService){ }

  ngOnInit(): void {

    // Get today's date
    const today = new Date();
    // Format today's date as YYYY-MM-DD
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;

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
      eventName:  new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:4}),
        RxwebValidators.maxLength({value:150})
      ]),
      eventStart: new FormControl('', [RxwebValidators.required()]),
      eventEnd:  new FormControl('', [RxwebValidators.required()]),
      location: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:8}),
        RxwebValidators.maxLength({value:50})
      ]),
      description: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:250}),
        RxwebValidators.maxLength({value:2000})
      ]),
      capacity: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false }),
        RxwebValidators.maxNumber({value:200}),
        RxwebValidators.minNumber({value:50 })
      ]),
      organizer: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:4}),
        RxwebValidators.maxLength({value:150})
      ]),
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
