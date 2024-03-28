import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '../service/event.service';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  eventList:any[] = []
  constructor(private _EventService: EventService, private _ProjectService: ProjectService){
    this.loadEvents();
  }

  loadEvents(){
    this._ProjectService.getFutureEvents().subscribe((res:any)=>{
        console.log("Response of all Fututre Events: ", res)
      })

      this.eventList = [
        {
          "eventID": 1711142224080,
          "eventName": "Test Event 1",
          "event Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "eventOrganizer":"Green Planet",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
          "totalCapacity":100,
          "booked": 50,
          "left": 50
        },
        {
          "eventID": 171114224080,
          "eventName": "Test Event 2",
          "event Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "eventOrganizer":"Green Planet",
          "eventCapacity": "100",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e"
        },
        {
          "eventID": 171165224080,
          "eventName": "Test Event 3",
          "event Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "eventOrganizer":"Green Planet",
          "eventCapacity": "100",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e"
        },
        {
          "eventID": 171165224080,
          "eventName": "Test Event 3",
          "event Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "eventOrganizer":"Green Planet",
          "eventCapacity": "100",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e"
        }
      ]

  }

}
