import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { NumericValueType, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-citizen-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgMultiSelectDropDownModule,
    TranslateModule
  ],
  templateUrl: './citizen-register.component.html',
  styleUrl: './citizen-register.component.css'
})
export class CitizenRegisterComponent implements OnInit {

  citizenRegForm!: FormGroup
  cities:any = cities
  incompleteForm: boolean = false
  
  constructor(
    private _projectService: ProjectService, 
    private router: Router,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.citizenRegForm = new FormGroup({
      firstName: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.alpha(),
        RxwebValidators.minLength({value:4}),
        RxwebValidators.maxLength({value:50})

      ]),
      lastName:  new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.alpha(),
        RxwebValidators.minLength({value:4}),
        RxwebValidators.maxLength({value:50})
      ]),
      dob:  new FormControl('', [RxwebValidators.required()]),
      city: new FormControl(null, [RxwebValidators.required()]),
      passportNumber: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:13}),
        RxwebValidators.maxLength({value:13})
      ]),
      contactNumber: new FormControl('', [
        RxwebValidators.required(), 
        RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false }),
        RxwebValidators.minLength({value:10}),
        RxwebValidators.maxLength({value:10})
      ]),
      email: new FormControl('', [
        RxwebValidators.email(),
        RxwebValidators.required(), 
        RxwebValidators.minLength({value:6}),
        RxwebValidators.maxLength({value:100})
      ]),
      password: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:8}),
        RxwebValidators.maxLength({value:25})
      ]),
      role: new FormControl('citizen')
    })
  }

  registerCitizen(){
    if(this.citizenRegForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      let payload = this.citizenRegForm.getRawValue();
      this.incompleteForm = false;
      this._projectService.registerCitizen(payload).subscribe((res:any)=>{
        if(res.status == 1){
          alert("Citizen Created Succesfully.")
          this.citizenRegForm.reset({});
          var _popup = this.dialog.open(LoginComponent, {
            width: '60%',
            data: {
              title: "Login"
            }
          })
        }else if(res.status == 0){
          alert("Email already Exists.")
        }else if(res.status == 2){
          alert("Identity Number already Exists.")
        }
        else{
          alert("Citizen Not Created Succesfully.")
        }
      })
    }

    
  }

  cancelRegistration(){
    this.citizenRegForm.reset({})
  }

}
