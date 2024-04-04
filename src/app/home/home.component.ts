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
export class HomeComponent implements OnInit{

  faArrowUp = faArrowAltCircleUp
  faArrowDown = faArrowAltCircleDown

  showComments:boolean = false

  postsList:any = [];
  loggedInDetails: any = {}
  loggedInUserID: any
  loggedIn: boolean = false;

 eventList: any = [
    {
      eventID: 2345,
      eventStart: '2024-03-18T01:00:52.014Z',
      eventEnd: '2024-03-18T04:00:52.014Z',
      eventName: 'Tom Alter and Dave Toennies',
      eventLocaion: 'Infinity Hall and Sidebar'
    }/* ,
    {
      eventID: 4345,
      eventStart: '2024-03-20T01:00:52.014Z',
      eventEnd: '2024-03-20T04:00:52.014Z',
      eventName: 'Paint & Tour',
      eventLocaion: 'Infinity Hall and Sidebar'
    },
    {
      eventID: 9687,
      eventStart: '2024-03-22T01:00:52.014Z',
      eventEnd: '2024-03-22T04:00:52.014Z',
      eventName: "Let's talk shop.",
      eventLocaion: 'Infinity Hall and Sidebar'
    },
    {
      eventID: 3768,
      eventStart: '2024-03-28T01:00:52.014Z',
      eventEnd: '2024-03-28T04:00:52.014Z',
      eventName: 'Community Game Night',
      eventLocaion: 'Infinity Hall and Sidebar'
    }, */
  ]

  ticketCount:any = 0

  constructor(public dialog: MatDialog, private _projectService: ProjectService){}

  ngOnInit(): void {

    //Login Logout Check
    let loggedInX = localStorage.getItem('loggedInUser')
    if (loggedInX !== null) {
      this.loggedInDetails = JSON.parse(loggedInX);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }

    this._projectService.getFeedbacks().subscribe((res:any)=>{
      console.log("Feedbacks:-----------------------  ", res);
    })

    let postListX:any = localStorage.getItem('postsList');
    console.log("Post List: ", postListX)
    this.postsList = JSON.parse(postListX);
    console.log("Post List: ", this.postsList)
  }

  upLikePost(postID:any){
    //console.log("Post ID: ", postID);
    //console.log(this.postsList.find(x=>x.postID == postID));
    let post = this.postsList.find((x:any)=>x.postID == postID)
    post.postUpLikes = post.postUpLikes+1;
  }

  downLikePost(postID:any){
    //console.log("Post ID: ", postID);
    //console.log(this.postsList.find(x=>x.postID == postID));
    let post = this.postsList.find((x:any)=>x.postID == postID)
    post.postDownLikes = post.postDownLikes-1;
    //console.log("post Updated: ", post);
  }

  showCommentsArea(){
    this.showComments = true
  }
  openCreatePostModal(){
    var _popup = this.dialog.open(CreatePostModalComponent, {
      width: '60%',
      
    })
    _popup.afterClosed().subscribe((item:any)=>{
      //console.log("Post DetailsX:", item)
      //this.postsList = item;
      //localStorage.setItem('postsList', JSON.stringify(this.postsList));
      // var FoundIndex = this.projectList.findIndex((x:any)=>x.id == item.id)
      // this.projectList[FoundIndex] = item
      // localStorage.setItem('projects', JSON.stringify(this.projectList));
      /* const ObjectToReplace = this.projectList.find((x:any)=>{
        x.id == item.id
      })
      console.log("Object To Replace:", ObjectToReplace) */
    })
  }

  increasetTicket(){
    
    this.ticketCount++;
  }

  decreasetTicket(){
    if(this.ticketCount > 0){
      this.ticketCount--;
    }
    
  }

  getTickets(event:any){
    if(this.ticketCount >0){
      alert(this.ticketCount+ " ticket reserved for event: "+ event.eventName);
      this.ticketCount = 0;
    }
    
  }

  


  
}
