import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { faArrowAltCircleDown, faArrowAltCircleUp, faArrowRightArrowLeft, faArrowUpRightFromSquare, faCoffee, faComment, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  noDataAvaialble:boolean = false
  loader: boolean = true
  otherEvents:any[] = []
  loggedInUserID: any
  loggedInDetails: any = {}
  allowedToVote: boolean = false
  loggedIn: boolean = false;
  projectList: any[] = [];
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  faMessage = faMessage
  faArrowUpRight = faArrowUpRightFromSquare
  faArrowUp = faArrowAltCircleUp
  faArrowDown = faArrowAltCircleDown
  fromDate: any = new Date().toISOString()
  projects: any;
  searchProject: any = ""
  departmentList: any[] = [{ name: 'Transportation' }, { name: 'Education' }, { name: 'Crime' }, { name: 'Environment' }]

  constructor(private _projectService: ProjectService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProjects();

    //Login Logout Check
    let loggedInX = localStorage.getItem('loggedInUser')
    if (loggedInX !== null) {
      this.loggedInDetails = JSON.parse(loggedInX);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }

    this._projectService.getFutureEvents().subscribe((res:any)=>{
      this.otherEvents = res
    })
  }

  loadProjects() {
    this._projectService.getProjects().subscribe((res: any) => {
      if (res.status == 1) {
        this.projectList = res.projects
        console.log("Project list: ", this.projectList)
        this.loader = false
      } else {
        this.projectList = [];
        this.loader = false;
        this.noDataAvaialble = true
      }
    })
  }

  openProject(id: number) {
    this.router.navigate(['/project-detail', id])
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  reset() {
    this.loadProjects();
  }


  upVoteProject(projectId: any) {
    let project = this.projectList.find((x: any) => x.projectId == projectId)
    if (!this.loggedIn) {
      this.allowedToVote = true
      var _popup = this.dialog.open(LoginComponent, {
        width: '60%',
        data: {
          title: "Login"
        }
      })
    } else {
      this.allowedToVote = false
      if (!project.upVotes.includes(this.loggedInUserID)) {
        let payLoad: any = {
          "projectId": projectId,
          "userId": this.loggedInUserID
        }
        this._projectService.upVoteProject(payLoad).subscribe((res: any) => {
          if (res.status == 1) {
            let objIndex = this.projectList.findIndex(obj => obj.projectId == res.project.projectId)
            this.projectList[objIndex] = res.project
          } else {
            alert("Up vote unsucessfull");
          }
        })
      } 
    }
  }

  downVoteProject(projectId: any) {
    let project = this.projectList.find((x: any) => x.projectId == projectId)
    if (!this.loggedIn) {
      this.allowedToVote = true
      var _popup = this.dialog.open(LoginComponent, {
        width: '60%',
        data: {
          title: "Login"
        }
      })
    } else {
      this.allowedToVote = false
      if (!project.downVotes.includes(this.loggedInUserID)) {
        let payLoad: any = {
          "projectId": projectId,
          "userId": this.loggedInUserID
        }
        this._projectService.downVoteProject(payLoad).subscribe((res: any) => {
          if (res.status == 1) {
            let objIndex = this.projectList.findIndex(obj => obj.projectId == res.project.projectId)
            this.projectList[objIndex] = res.project
          } else {
            alert("Down vote unsucessfull");
          }
        })
      }
    }
  }


  getSearchedProjects() {
    if (this.searchProject != "") {
      console.log(this.searchProject)
    }
  }

  createProject(){
    this.router.navigate([`/new-project`])
  }

}
