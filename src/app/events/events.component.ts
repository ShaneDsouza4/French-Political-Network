import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EventBookingModalComponent } from '../event-booking-modal/event-booking-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  eventList:any[] = []
  loader: boolean = true
  noDataAvailable: boolean = false
 

  constructor(public dialog: MatDialog, private _ProjectService: ProjectService, private router: Router){}

  ngOnInit(): void {

    this.loadEvents();
  }

  loadEvents(){
    this.loader = true
    this._ProjectService.getFutureEvents().subscribe((res:any)=>{
      console.log("Response of all Fututre Events: ", res)
      this.eventList = res
      this.loader = false
    })
  }

  viewEvent(eventId:any){
    console.log("Event ID: ", eventId)
    this.router.navigate([`/event-detail/${eventId}`])
  }

  createEvent(){
    this.router.navigate([`/create-event`])
  }
  
}
