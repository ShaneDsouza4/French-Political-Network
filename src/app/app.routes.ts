import { Routes } from '@angular/router';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsComponent } from './events/events.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GovtDashboardComponent } from './govt-dashboard/govt-dashboard.component';
import { GovtRegisterComponent } from './govt-register/govt-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizComponent } from './quiz/quiz.component';
import { VoteComponent } from './vote/vote.component';
import { WhoswhoComponent } from './whoswho/whoswho.component';

export const routes: Routes = [
    {path:'/', redirectTo:'home', pathMatch:'full'},
    //{path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'citizen-register', component: CitizenRegisterComponent},
    {path:'govtEmp-register', component: GovtRegisterComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'project-listing', component: ProjectListingComponent},
    {path:'project-detail/:projectId', component: ProjectDetailsComponent},
    {path:'new-project', component: CreateProjectComponent},
    {path: 'govt-dashboard', component: GovtDashboardComponent},
    {path: 'quiz', component: QuizComponent},
    {path:'events', component: EventsComponent},
    {path:'create-event', component: CreateEventComponent},
    {path:'events-list', component: EventListComponent},
    {path:'event-detail/:eventId', component: EventDetailsComponent},
    {path:'vote', component: VoteComponent},
    {path:'feedback', component: FeedbackComponent},
    {path:'whoswho', component: WhoswhoComponent},
    {path: '**', component:HomeComponent}
];
