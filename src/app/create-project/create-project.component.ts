import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

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

  constructor(private _projectService: ProjectService, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.newProjectForm = new FormGroup({
      name: new FormControl('', [RxwebValidators.required()]),
      department: new FormControl(null, [RxwebValidators.required()]),
      city: new FormControl(null, [RxwebValidators.required()]),
      duration:  new FormControl('', [RxwebValidators.required()]),
      budget:  new FormControl('', [RxwebValidators.required()]),
      projectStartDate: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl('', [RxwebValidators.required()]),
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
          alert("Project Created Succesfully.")
          this.newProjectForm.reset({});
          this.router.navigate(['/projects'])
        }else{
          alert("Project Not Created Succesfully.")
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
