import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp, faArrowUp, faMessage, faUser,  } from '@fortawesome/free-solid-svg-icons';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OpinionModalComponent } from '../opinion-modal/opinion-modal.component';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';
import { ProjectService } from '../service/project.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  projectList: any[] = [];
  loader: boolean = true
  noDataAvaialble:boolean = false

  constructor(private _projectService: ProjectService, private router: Router, public dialog: MatDialog) {
    this.loadProjects()
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

  scrollToProjectsDiv(el: HTMLElement){
    el.scrollIntoView();
  }
}
