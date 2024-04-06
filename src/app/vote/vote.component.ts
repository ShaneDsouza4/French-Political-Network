import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProjectService } from '../service/project.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
    TranslateModule
  ],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent implements OnInit {

  faArrowUp = faArrowAltCircleUp
  faArrowDown = faArrowAltCircleDown
  AllParties: any[] = []
  loggedInUserID: any
  loggedInDetails: any = {}
  allowedToVote: boolean = false
  loggedIn: boolean = false;
  userVoted: boolean = false
  spinner: boolean = false
  loader: boolean = true
  noDataAvailable: boolean = false

  constructor(private _projectService: ProjectService, public dialog: MatDialog, private toastr: ToastrService) {

  }
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

    this.getPartyData()
  }



  getPartyData() {
    this.loader = true
    this._projectService.getAllPartyVotes().subscribe((res: any) => {
      console.log("Response: ", res);
      if (res.status == 1) {
        this.AllParties = res.result
        this.AllParties.sort((a, b) => b.vote.length - a.vote.length);
        this.loader = false
      } else {
        this.AllParties = []
        this.loader = false
        this.noDataAvailable = true
      }
    })

    setTimeout(()=>{
      const scrollEle = document.querySelector('.candidates-grid');
      if(scrollEle)
      scrollEle.scrollIntoView();
    }, 1500);
  }



  voteParty(partyId: any) {
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
      this.spinner = true
      let payload = {
        "personId": this.loggedInUserID,
        "partyId": partyId
      }

      this._projectService.voteParty(payload).subscribe((res: any) => {
        console.log("Party Vote Response: ", res)
        if (res.status == 1) {
          this.spinner = false
          this.toastr.success( "Vote Sucessfull!" );
          this.AllParties = res.party
          // let objIndex = this.AllParties.findIndex(obj => obj.id == res.party.id)
          // this.AllParties[objIndex] = res.party
        } else {
          this.spinner = false
          this.toastr.error( "Vote Not Sucessfull!" );
        }
      })
    }

  }

  unVoteParty(partyId: any) {
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
      this.spinner = true
      let payload = {
        "personId": this.loggedInUserID,
        "partyId": partyId
      }

      this._projectService.unVoteParty(payload).subscribe((res: any) => {
        console.log("Party Un Vote Response: ", res)
        if (res.status == 1) {
          this.spinner = false
          this.AllParties = res.party
          // let objIndex = this.AllParties.findIndex(obj => obj.id == res.party.id)
          // this.AllParties[objIndex] = res.party
          this.toastr.success( "Un Vote Sucessfull!" );
        } else {
          this.spinner = false
          this.toastr.error( "Un Vote Not Sucessfull!" );
        }
      })
    }

  }

}
