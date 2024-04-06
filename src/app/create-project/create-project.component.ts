import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { NumericValueType, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  cities:any = cities
  newProjectForm!: FormGroup
  projectList:any
  departmentList: any[] = [{name:'Transportation'}, {name:'Education'}, {name:'Crime'}, {name:'Environment'} ]
  incompleteForm:boolean = false;
  minDate:any;

  constructor(private _projectService: ProjectService, private router: Router, private http: HttpClient, private toastr: ToastrService  ){}

  ngOnInit(): void {

    // Get today's date
    const today = new Date();
    // Format today's date as YYYY-MM-DD
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;

    this.newProjectForm = new FormGroup({
      name: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:4}),
        RxwebValidators.maxLength({value:50})
      ]),
      department: new FormControl(null, [RxwebValidators.required()]),
      city: new FormControl(null, [RxwebValidators.required()]),
      duration:  new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false }),
        RxwebValidators.maxNumber({value:30 }),
        RxwebValidators.minNumber({value:1 })
      ]),
      budget:  new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false }),
        RxwebValidators.maxNumber({value:500000 }),
        RxwebValidators.minNumber({value:1000 })
      ]),
      projectStartDate: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({value:250}),
        RxwebValidators.maxLength({value:2000})
      ]),
      createdDate: new FormControl(new Date().toISOString()),
      opinions: new FormControl([]),
      upVotes: new FormControl([]),
      downVotes: new FormControl([]),
    })
  }


  onCreateProject(){
    if(this.newProjectForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      this.incompleteForm = false
      let payLoad: any = this.newProjectForm.getRawValue();
      this._projectService.createNewProject(payLoad).subscribe((res:any)=>{
        if(res.status == 1){
          this.toastr.success("Project Created Succesfully.");
          this.newProjectForm.reset({});
          this.router.navigate(['/projects'])
        }else{
          this.toastr.error("Project Not Created Succesfully.");
        }
      })
    }
    
    
  }

  reset(){
    this.newProjectForm.reset({})
  }


  uploadImage(event:any){
    
    console.log(event);
    const file = event.target.files[0];
    console.log(file)

    if(file.type == "image/png"){
      const formObj = new FormData();
      formObj.append('file', file);
    }else{
      alert("Incorrect image type")
    }
    

  }


}
