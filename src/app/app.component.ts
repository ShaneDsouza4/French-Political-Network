import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { GovtRegisterComponent } from './govt-register/govt-register.component';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { CitizenProjectsComponent } from './citizen-projects/citizen-projects.component';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OpinionModalComponent } from './opinion-modal/opinion-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitizenActivityComponent } from './citizen-activity/citizen-activity.component';
import { GovtDashboardComponent } from './govt-dashboard/govt-dashboard.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule
} from '@angular/material/dialog';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { EventsComponent } from './events/events.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { ProjectService } from './service/project.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventBookingsComponent } from './event-bookings/event-bookings.component';
import { EventListComponent } from './event-list/event-list.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { EventBookingModalComponent } from './event-booking-modal/event-booking-modal.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';
import { VoteComponent } from './vote/vote.component';
import { PoliticalQuizComponent } from './political-quiz/political-quiz.component';
import { PoliticalQuizQuestionsComponent } from './political-quiz-questions/political-quiz-questions.component';

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
    PoliticalQuizQuestionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //Event
  isLoginView: boolean= true;
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

  projectList: any = [
    {
      id:'1243dsd3',
      name: "TransitTransform",
      department: 'Transportation',
      city: "Lyon",
      duration: "27 months",
      budget: "500,000",
      IsActive: true,
      projectStartDate: '2024-02-27T04:13:52.014Z',
      createdDate: '2024-02-27T04:13:52.014Z',
      createdBy: "shane@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      opinions: [
        { opinion: 'Great', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Excellent', date: '2024-02-29T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Excellent', date: '2024-02-30T04:13:52.014Z', message: "" },
      ],
      upVotes: 0,
      downVotes: 0
    },
    {
      id:'12fd43dsd3',
      name: "TechLearnHub",
      department: 'Education',
      city: "Paris",
      duration: "12 months",
      budget: "100,000",
      IsActive: true,
      projectStartDate: '2024-03-20T04:13:52.014Z',
      createdDate: '2024-02-27T04:13:52.014Z',
      createdBy: "sheldon@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      opinions: [
        { opinion: 'Good', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Good', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Excellent', date: '2024-02-28T04:13:52.014Z', message: "" },
        { opinion: 'Awful', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      ],
      upVotes: 0,
      downVotes: 0
    },
    {
      id:'134dfg5',
      name: "SafeStreetsProgram",
      department: 'Crime',
      city: "Nantes",
      duration: "06 months",
      budget: "400,000",
      IsActive: true,
      projectStartDate: '2024-01-27T04:13:52.014Z',
      createdDate: '2024-02-27T04:13:52.014Z',
      createdBy: "shane@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      opinions: [
        { opinion: 'Good', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
      ],
      upVotes: 0,
      downVotes: 0
    },
    {
      id:'dfs45d3',
      name: "GreenSustainProject",
      department: 'Environment',
      city: "Nice",
      duration: "24 months",
      budget: "800,000",
      IsActive: true,
      projectStartDate: '2024-05-20T04:13:52.014Z',
      createdDate: '2024-01-27T04:13:52.014Z',
      createdBy: "sheldon@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      opinions: [
        { opinion: 'Good', date: '2024-02-29T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-29T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Good', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Excellent', date: '2024-02-28T04:13:52.014Z', message: "" },
        { opinion: 'Awful', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      ],
      upVotes: 0,
      downVotes: 0
    },
    {
      id:'f312434fdd3',
      name: "RainDrain",
      department: 'Environment',
      city: "Paris",
      duration: "06 months",
      budget: "1000,000",
      IsActive: false,
      projectStartDate: '2023-01-27T04:13:52.014Z',
      createdDate: '2023-02-27T04:13:52.014Z',
      createdBy: "shane@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      opinions: [
        { opinion: 'Good', date: '2024-02-29T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-29T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Good', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Excellent', date: '2024-02-28T04:13:52.014Z', message: "" },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Awful', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { opinion: 'Average', date: '2024-02-28T04:13:52.014Z', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      ],
      upVotes: 0,
      downVotes: 0
    }
  ]

  postsList:any = [
    {
      postID: 2323,
      postAuthor: 'Jacques',
      postDate: '2024-02-27T04:13:52.014Z',
      postDescription: "Did anyone notice, the road near Gilles Marchal was repaired, really fast.",
      postUpLikes: 10,
      postDownLikes: 0,
      postComments: [
        {
          commentAuthor: "Jean",
          commentDate: '2024-02-27T06:13:52.014Z',
          commentDescription: "Indeed, I noticed it was damaged in the morning, and then done up by the evening."
        },
        {
          commentAuthor: "Margaret",
          commentDate: '2024-02-27T08:13:52.014Z',
          commentDescription: "It was an actual problem earlier."
        },
        {
          commentAuthor: "Peter",
          commentDate: '2024-02-28T04:13:52.014Z',
          commentDescription: "That was certainly Fast!"
        }
      ]
    },
    {
      postID: 23423,
      postAuthor: 'Celine',
      postDate: new Date(),
      postDescription: "These electricity cuts are annoying 😬😬",
      postUpLikes: 102,
      postDownLikes: 30,
      postComments: [
        {
          commentAuthor: "Gary",
          commentDate: new Date(),
          commentDescription: "Summer heat is bad."
        },
        {
          commentAuthor: "Jesse",
          commentDate: new Date(),
          commentDescription: "It sure is."
        }
      ]
    },
    {
      postID: 232123,
      postAuthor: 'Chanel',
      postDate: new Date(),
      postDescription: "You can learn a lot from 80+ year olds. ",
      postUpLikes: 34,
      postDownLikes: 0,
      postComments: [
        {
          commentAuthor: "Jacob",
          commentDate: new Date(),
          commentDescription: "How?"
        }
      ]
    },
    {
      postID: 23236983,
      postAuthor: 'Rob',
      postDate: new Date(),
      postDescription: "Road block at Wellington. Traffic Jammm.",
      postUpLikes: 0,
      postDownLikes: 40,
      postComments: [
        {
          commentAuthor: "Joel",
          commentDate: new Date(),
          commentDescription: "No Way!"
        },
        {
          commentAuthor: "Seth",
          commentDate: new Date(),
          commentDescription: "I'll be late for work."
        },
        {
          commentAuthor: "Ives",
          commentDate: new Date(),
          commentDescription: "Is there a different route?"
        }
      ]
    },
    {
      postID: 2323245,
      postAuthor: 'Jackson',
      postDate: new Date(),
      postDescription: "I'm looking for a web developer, to build my business website. Please reply.",
      postUpLikes: 45,
      postDownLikes: 0,
      postComments: [
        {
          commentAuthor: "Ruth",
          commentDate: new Date(),
          commentDescription: "I'd love to help you out :)."
        },
        {
          commentAuthor: "Kai",
          commentDate: new Date(),
          commentDescription: "What business do you run?."
        },
        {
          commentAuthor: "Rufus",
          commentDate: new Date(),
          commentDescription: "I have a cousin, who can help you out."
        },
        {
          commentAuthor: "Zack",
          commentDate: new Date(),
          commentDescription: "Get in touch with me."
        }
      ]
    },
  ]

  quizQuestionList:any = [
    {
        "id": "4",
        "question": "Who was the first female Prime Minister of France?",
        "description": "Identify the trailblazing woman who held the position of Prime Minister in France.",
        "answers": {
            "answer_a": "Édith Cresson",
            "answer_b": "Simone Veil",
            "answer_c": "Ségolène Royal",
            "answer_d": "Élisabeth Guigou"
        },
        "multiple_correct_answers": false,
        "correct_answers": {},
        "correct_answer": "answer_a",
        "explanation": "Édith Cresson became the first female Prime Minister of France in 1991.",
        "tip": "Look into notable figures in French political history.",
        "tags": [
            "Politics",
            "France",
            "Leadership"
        ],
        "category": null,
        "difficulty": "Easy"
    },
    {
        "id": "2",
        "question": "What is the official residence of the President of France?",
        "description": "Identify the main residence of the President of France.",
        "answers": {
            "answer_a": "Élysée Palace",
            "answer_b": "Louvre Palace",
            "answer_c": "Versailles Palace",
            "answer_d": "Palais Bourbon"
        },
        "multiple_correct_answers": false,
        "correct_answers": {},
        "correct_answer": "answer_a",
        "explanation": "The Élysée Palace serves as the official residence of the President of France.",
        "tip": "Focus on the prominent landmarks associated with French politics.",
        "tags": [
            "Politics",
            "France",
            "Landmarks"
        ],
        "category": null,
        "difficulty": "Easy"
    },
    {
        "id": "1",
        "question": "Who is the current President of France?",
        "description": "Identify the current head of state in France.",
        "answers": {
            "answer_a": "Emmanuel Macron",
            "answer_b": "François Hollande",
            "answer_c": "Nicolas Sarkozy",
            "answer_d": "Jacques Chirac"
        },
        "multiple_correct_answers": false,
        "correct_answers": {},
        "correct_answer": "answer_a",
        "explanation": "Emmanuel Macron is the current President of France, having assumed office on May 14, 2017.",
        "tip": "Keep track of recent political developments in France.",
        "tags": [
            "Politics",
            "France",
            "Current Affairs"
        ],
        "category": null,
        "difficulty": "Easy"
    },
    {
        "id": "16",
        "question": "Who was the longest-serving President of France?",
        "description": "Identify the President of France who served the longest term in office.",
        "answers": {
            "answer_a": "François Mitterrand",
            "answer_b": "Charles de Gaulle",
            "answer_c": "Georges Pompidou",
            "answer_d": "Jacques Chirac"
        },
        "multiple_correct_answers": false,
        "correct_answers": {},
        "correct_answer": "answer_a",
        "explanation": "François Mitterrand served as the President of France for two consecutive terms from 1981 to 1995, making him the longest-serving President.",
        "tip": "Look into the tenure of different French presidents.",
        "tags": [
            "Politics",
            "France",
            "Presidency"
        ],
        "category": null,
        "difficulty": "Easy"
    },
    {
        "id": "5",
        "question": "What is the French term for the head of government?",
        "description": "Identify the title given to the chief executive in France.",
        "answers": {
            "answer_a": "Président",
            "answer_b": "Premier Ministre",
            "answer_c": "Chef de l'État",
            "answer_d": "Ministre de l'Intérieur"
        },
        "multiple_correct_answers": false,
        "correct_answers": {},
        "correct_answer": "answer_b",
        "explanation": "The head of government in France is referred to as the Premier Ministre.",
        "tip": "Focus on the specific roles in the French political system.",
        "tags": [
            "Politics",
            "France",
            "Government"
        ],
        "category": null,
        "difficulty": "Easy"
    }
]

  demoUsers:any = [
    {email: 'admin@team14.com', password: '12345678', role:'govt' },
    {email: 'citizen@team14.com', password: '12345678', role: 'citizen' },
  ]

  constructor(private _ProjectService: ProjectService, private _translateService: TranslateService, public dialog: MatDialog) {
    
    //To Remove
    localStorage.setItem('projects', JSON.stringify(this.projectList));
    let postListX:any = localStorage.getItem('postsList');
    if(postListX == null){
      localStorage.setItem('postsList', JSON.stringify(this.postsList));
    }
    localStorage.setItem('quizQuestionList', JSON.stringify(this.quizQuestionList));

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
  }

}
