import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormConfig, RxFormBuilder, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

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
  showToast: boolean = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _projectService: ProjectService, 
    private router: Router,
    private ref:MatDialogRef<LoginComponent>,
    private formBuilder: RxFormBuilder,
    private toastr: ToastrService
  ){

    this.loginForm = new FormGroup({
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
      ])
    })
  }

  onLogin(){
    if(this.loginForm.status == "INVALID"){
      this.incompleteForm = true
    }else{
      this.incompleteForm = false
      let payLoad: any = this.loginForm.getRawValue();

      this._projectService.login(payLoad).subscribe((res:any)=>{
      if(res.status == 1){
        
        
        let loggedInUserDetails = res.userInfo;
        loggedInUserDetails.email = payLoad.email;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUserDetails));
        this.router.navigate(['/'])
        this.closepopup();
        window.location.reload()
      }else{
        //alert("Login Not Succesfull.")
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


  public noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length? null : { 'whitespace': true };       
}

}
