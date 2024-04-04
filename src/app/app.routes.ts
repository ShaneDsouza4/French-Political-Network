import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { GovtRegisterComponent } from './govt-register/govt-register.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CitizenProjectsComponent } from './citizen-projects/citizen-projects.component';
import { CitizenActivityComponent } from './citizen-activity/citizen-activity.component';
import { GovtDashboardComponent } from './govt-dashboard/govt-dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [
    // {path:'', redirectTo:'home', pathMatch:'full'},
    // {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'citizen-register', component: CitizenRegisterComponent},
    {path:'govtEmp-register', component: GovtRegisterComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'project-listing', component: ProjectListingComponent},
    {path:'project-detail/:projectId', component: ProjectDetailsComponent},
    {path:'new-project', component: CreateProjectComponent},
    {path:'my-project', component: CitizenProjectsComponent},
    {path: 'my-activity', component: CitizenActivityComponent},
    {path: 'govt-dashboard', component: GovtDashboardComponent},
    {path: 'quiz', component: QuizComponent},
    {path:'events', component: EventsComponent},
    {path:'create-event', component: CreateEventComponent},
    {path:'events-list', component: EventListComponent},
    {path:'event-detail/:eventId', component: EventDetailsComponent},
    {path:'vote', component: VoteComponent},
    // {path: '**', component:HomeComponent}
];
