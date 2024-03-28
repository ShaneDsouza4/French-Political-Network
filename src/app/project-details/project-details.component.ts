import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OpinionModalComponent } from '../opinion-modal/opinion-modal.component';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../login/login.component';
import { WarningModalComponent } from '../warning-modal/warning-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {

  projectComments: any[] = []
  allowedToVote: boolean = false
  loggedIn: boolean = false;
  loggedInUserID: any
  loggedInDetails: any = {}
  activeProjectId: number = 0;
  projectObj: any
  userInfo: any
  isLoggedIn: boolean = false
  giveOpinion: boolean = false;
  projectList: any
  projectDetails: any = {}
  faArrowUp = faArrowAltCircleUp
  faArrowDown = faArrowAltCircleDown
  incompleteComment: boolean = false
  spinner: boolean = false
  loader: boolean = true
  opinionForm!: FormGroup
  noDataAvailable: boolean = false
  otherEvents: any[] = []

  constructor(private activatedRouted: ActivatedRoute, private _projectService: ProjectService, private router: Router, public dialog: MatDialog) {

    /* const loginDetails = localStorage.getItem('loggedIn');
    if(loginDetails == null){
      this.isLoggedIn = false;
    }else{
      this.userInfo = JSON.parse(loginDetails);
      this.isLoggedIn = true;
    } */

    this.opinionForm = new FormGroup({
      'message': new FormControl('')
    })

    // let projectListX:any = localStorage.getItem('projects')
    // this.projectList = JSON.parse(projectListX)


    this.activatedRouted.params.subscribe((res: any) => {
      this.activeProjectId = res.projectId
      this.getProjectDetail(this.activeProjectId)
    })

    this._projectService.getFutureEvents().subscribe((res:any)=>{
      this.otherEvents = res
      console.log("Other Events: ", this.otherEvents)
    })

  }
  ngOnInit(): void {
    //Login Logout Check
    let loggedIn = localStorage.getItem('loggedInUser')
    if (loggedIn !== null) {
      this.loggedInDetails = JSON.parse(loggedIn);
      console.log("Logged In User: ", this.loggedInDetails)
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }


  }

  getProjectDetail(activeProjectId: number) {
    console.log("Project ID: ", activeProjectId)
    this.loader = true
    this._projectService.getProjectDetailById(activeProjectId).subscribe((res: any) => {
      console.log("Response of Specific: ", res);
      if (res.status == 1) {
        this.loader = false
        this.projectDetails = res.projects[0]
        console.log("Get Project Detail: ", this.projectDetails)
        this.getProjectComments(activeProjectId)
      } else {
        this.projectDetails = {}
        this.loader = false
        this.noDataAvailable = true
      }
    })
  }

  getProjectComments(projectId: any) {
    this._projectService.getCommentForID(projectId).subscribe((res: any) => {

      if (res.status == 1) {
        this.projectComments = res.comments
        this.projectComments = this.projectComments.reverse();
        console.log('COMMENTS: ', this.projectComments)
      } else {
        this.projectComments = []
      }
    })
  }

  cancelOpinion() {
    this.giveOpinion = false;
  }

  openOpinionDialog() {
    var _popup = this.dialog.open(OpinionModalComponent, {
      width: '60%',
      data: {
        title: "Share an anonymous opinion",
        projectDetails: this.projectDetails
      }
    })

    _popup.afterClosed().subscribe((item: any) => {
      var FoundIndex = this.projectList.findIndex((x: any) => x.id == item.id)
      this.projectList[FoundIndex] = item
      localStorage.setItem('projects', JSON.stringify(this.projectList));
    })
  }

  submitComment() {
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
      console.log(this.opinionForm.getRawValue());
      console.log(this.projectDetails)
      let payLoad: any = {
        "content": this.opinionForm.getRawValue().message,
        "relation_id": this.projectDetails.projectId,
        "timestamp": new Date().toISOString(),
        "user_id": this.loggedInUserID
      }
      if (payLoad.content == "") {
        this.incompleteComment = true
      } else {
        var warningPopup = this.dialog.open(WarningModalComponent, {
          width: '60%',
          data: {
            title: "Login",
            content: "Comments once submitted cannot be edited or deleted. Do you want to proceed ?"
          }
        })
        warningPopup.afterClosed().subscribe((item: any) => {
          console.log("Warning Pop up Details: ", item)
          if (item == "Confirm") {
            this.incompleteComment = false
            this.spinner = true
            this._projectService.addComment(payLoad).subscribe((res: any) => {
              console.log("Response: ", res)
              if (res.status == 1) {
                this.spinner = false
                this.projectComments.unshift(res.id)
                console.log("Project Comments: ", this.projectComments)
                this.opinionForm.reset({});
              } else {
                this.spinner = false
                alert("Upvote unsucessfull");
              }
            })
          }
        })



      }

    }

  }

  upVoteProject(projectId: any) {
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
      if (!this.projectDetails.upVotes.includes(this.loggedInUserID)) {
        let payLoad: any = {
          "projectId": projectId,
          "userId": this.loggedInUserID
        }
        this._projectService.upVoteProject(payLoad).subscribe((res: any) => {
          if (res.status == 1) {
            this.projectDetails = res.project
          } else {
            alert("Upvote unsucessfull");
          }
        })
      }
    }
  }

  downVoteProject(projectId: any) {
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
      if (!this.projectDetails.downVotes.includes(this.loggedInUserID)) {
        let payLoad: any = {
          "projectId": projectId,
          "userId": this.loggedInUserID
        }
        this._projectService.downVoteProject(payLoad).subscribe((res: any) => {
          if (res.status == 1) {
            this.projectDetails = res.project
          } else {
            alert("Downvote unsucessfull");
          }
        })
      }
    }
  }



}
