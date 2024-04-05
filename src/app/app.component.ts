import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CitizenActivityComponent } from './citizen-activity/citizen-activity.component';
import { CitizenProjectsComponent } from './citizen-projects/citizen-projects.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EventBookingModalComponent } from './event-booking-modal/event-booking-modal.component';
import { EventBookingsComponent } from './event-bookings/event-bookings.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsComponent } from './events/events.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GovtDashboardComponent } from './govt-dashboard/govt-dashboard.component';
import { GovtRegisterComponent } from './govt-register/govt-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { OpinionModalComponent } from './opinion-modal/opinion-modal.component';
import { PoliticalQuizQuestionsComponent } from './political-quiz-questions/political-quiz-questions.component';
import { PoliticalQuizComponent } from './political-quiz/political-quiz.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProjectService } from './service/project.service';
import { VoteComponent } from './vote/vote.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';
import { WhoswhoComponent } from './whoswho/whoswho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    CitizenRegisterComponent,
    GovtRegisterComponent,
    HomeComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectListingComponent,
    ProjectsComponent,
    CitizenProjectsComponent,
    CommonModule,
    NgMultiSelectDropDownModule,
    FontAwesomeModule,
    OpinionModalComponent,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CitizenActivityComponent,
    GovtDashboardComponent,
    MatDialogModule,
    QuizComponent,
    QuizQuestionsComponent,
    QuizResultComponent,
    EventsComponent,
    CreatePostModalComponent,
    HttpClientModule,
    TranslateModule,
    CreateEventComponent,
    EventBookingsComponent,
    EventListComponent,
    MyBookingComponent,
    EventBookingModalComponent,
    EventDetailsComponent,
    WarningModalComponent,
    VoteComponent,
    PoliticalQuizComponent,
    PoliticalQuizQuestionsComponent,
    FeedbackComponent,
    WhoswhoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //Event
  isLoginView: boolean= true;
  loggedInDetails: any = {}
  loggedInRole: any = "";
  registerObj: any = {
    "UserId": 0,
    "Name": "",
    "Email": "",
    "Password": "",
    "ContactNo": "",
    "Role": ""
  };
  loginObj : any = {
    "Password": "",
    "ContactNo": ""
  }
  isUserLoggedin: boolean = false;
  loggedUserData:any;
  //Event

  isLoggedIn: boolean = false;
  userInfo: any;

  //Check if User is logged in
  loggedIn: boolean = false

  title:any = "Greetings"

  demoUsers:any = [
    {email: 'admin@team14.com', password: '12345678', role:'govt' },
    {email: 'citizen@team14.com', password: '12345678', role: 'citizen' },
  ]

  constructor(private _ProjectService: ProjectService, private _translateService: TranslateService, public dialog: MatDialog) {
    //Login Logout Check
    let loggedInX = localStorage.getItem('loggedInUser')
    if (loggedInX !== null) {
      this.loggedInDetails = JSON.parse(loggedInX);
      //console.log("this. : ", this.loggedInDetails)
      this.loggedInRole = this.loggedInDetails.role
      //console.log('this.loggedInRole: ', this.loggedInRole)
      this.loggedIn = true
    } else {
      this.loggedIn = false

    }
  }

  ngOnInit(): void {
    //Language
    this._translateService.setDefaultLang('en');
    this._translateService.use(localStorage.getItem('language') || 'en');
    this.language = localStorage.getItem("language") || "en";


    //Login Logout Check
    let loginDetails:any = localStorage.getItem('loggedInUser')
    if(loginDetails !== null){
      this.loggedIn = true
    }else{
      this.loggedIn = false
    }
   
  }

  language:any = ""
  ChangeLanguage(language:any){
    const selectedLanguage = language.target.value;
    console.log("Selected Language: ", selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    this._translateService.use(selectedLanguage);

  }


  openLoginModal(){
    var _popup = this.dialog.open(LoginComponent, {
      width: '60%',
      data: {
        title: "Login"
      }
    })
  }

  logout(){
    let loginDetails:any = localStorage.getItem('loggedInUser')
    console.log(loginDetails);
    localStorage.removeItem('loggedInUser');
    this.loggedIn = false
    this.loggedInRole = ""
  }

}
