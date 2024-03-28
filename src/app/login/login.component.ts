import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { Router, RouterLink } from '@angular/router';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showLogin: boolean = true
  loginForm!: FormGroup
  spinner: boolean = false
  incompleteForm: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _projectService: ProjectService, 
    private router: Router,
    private ref:MatDialogRef<LoginComponent>
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [RxwebValidators.email(),RxwebValidators.required() ]),
      password: new FormControl('', [RxwebValidators.required()]), 
    })
  }

  onLogin(){
    if(this.loginForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      this.incompleteForm = false
      let payLoad: any = this.loginForm.getRawValue();
      this._projectService.login(payLoad).subscribe((res:any)=>{
      if(res.status == 1){
        alert("Login Sucessfull.")
        let loggedInUserDetails = res.userInfo;
        loggedInUserDetails.email = payLoad.email;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUserDetails));
        //this.router.navigate(['/projects'])
        this.closepopup();
        window.location.reload()
      }else{
        alert("Login Not Succesfull.")
      }
    })
    }
    
  }

  closepopup(){
    this.ref.close();
  }

  openSignUp(){
    this.router.navigate(['/citizen-register'])
    this.closepopup();
  }

}
