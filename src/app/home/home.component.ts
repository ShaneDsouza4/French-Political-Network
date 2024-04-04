import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
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
  projects: any[] = []; // Assuming this is your list of projects
  filteredProjects: any[] = [];
  searchText: string = '';

  constructor() {
    // Initialize projects with data
    // For demonstration, let's assume projects is populated elsewhere in your code
  }

  searchProjects() {
    if (this.searchText.trim() === '') {
      this.filteredProjects = [...this.projects]; // Reset to show all projects
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}
