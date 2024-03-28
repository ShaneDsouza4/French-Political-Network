import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventBookingModalComponent } from '../event-booking-modal/event-booking-modal.component';
import { ProjectService } from '../service/project.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  userRegistered: boolean = false
  eventDetails: any = {};
  loggedInDetails: any = {}
  loggedInUserID: any
  loggedIn: boolean = false;
  allowedToVote: boolean = false

  otherEvents: any[] = []

  constructor(private activatedRouted: ActivatedRoute, public dialog: MatDialog, private _projectService: ProjectService) {

    //Login Logout Check
    let loggedInX = localStorage.getItem('loggedInUser')
    if (loggedInX !== null) {
      this.loggedInDetails = JSON.parse(loggedInX);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }


    this.activatedRouted.params.subscribe((res: any) => {
      this.getEventDetail(res.eventId)

      
      
    })


    

  }

  getEventDetail(eventID: any) {
    console.log("Event ID: ", eventID)
    this._projectService.getEventById(eventID).subscribe((res: any) => {
      this.eventDetails = res[0];
      console.log("Event Detail: ", this.eventDetails)


      this._projectService.getFutureEvents().subscribe((res:any)=>{
        this.otherEvents = res.filter((x:any)=> x.id !==  this.eventDetails)
        console.log("Other Events: ", this.otherEvents)
      })


      if(this.eventDetails.registeredIds.includes(this.loggedInUserID)){
        this.userRegistered = true
      }else{
        this.userRegistered = false
      }
    })

    
  }


  registerForEvent() {
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
      console.log("Event Detail: ", this.eventDetails.id)

      let payLoad: any = {
        "eventId": this.eventDetails.id,
        "personId": this.loggedInUserID
      }

      this._projectService.registerForEvent(payLoad).subscribe((res:any)=>{
        if(res.status == 1){
          alert("Registered Succesfully!")
          this.userRegistered = true
        }else{
          alert("Could not register.")
          this.userRegistered = false
        }
      })
    }
  }


  unRegisterForEvent() {
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
      console.log("Event Detail: ", this.eventDetails.id)

      let payLoad: any = {
        "eventId": this.eventDetails.id,
        "personId": this.loggedInUserID
      }

      this._projectService.unRegisterForEvent(payLoad).subscribe((res:any)=>{
        console.log("Unregister Result: ", res)
        if(res.status == 1){
          alert("Un Registered Succesfully!")
          this.userRegistered = false
        }else{
          alert("Could not register.")
          this.userRegistered = true
        }
      })
    }
  }
}
