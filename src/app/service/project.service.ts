import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  urlToUse: any = "https://aseprojectbackend-1.onrender.com";

  private headers =  new HttpHeaders({
    'ngrok-skip-browser-warning': '69420',
  }) 

  constructor(private http: HttpClient) { }

  getTest(){
    return this.http.get(this.urlToUse);
  }

  registerGovtEmp(obj:any){
    return this.http.get("API_END_POINT", obj)
  }
  
  registerCitizen(obj:any){
    return this.http.post(`${this.urlToUse}/citizen/`, obj)
  }

  login(obj:any){
    return this.http.post(`${this.urlToUse}/log/login/`, obj)
  }

  logout(obj:any){
    return this.http.post("API_END_POINT", obj)
  }

  getAllProjectDepartments(){
    return this.http.get("API_END_POINT");
  }

  createNewProject(obj:any){
    return this.http.post(`${this.urlToUse}/project/`, obj); 
  }

  getProjects(){
    return this.http.get(`${this.urlToUse}/project/active`)
  }
  

  getProjectDetailById(projectId:number){
    return this.http.get(`${this.urlToUse}/project/${projectId}`);
  }

  getFilteredProjects(obj:any){
    return this.http.get("API_END_POINT", obj);
  }

  submitOpinion(obj:any){
    //return this.http.post("API_END_POINT", obj)
  }

  upVoteProject(obj:any){
    return this.http.patch(`${this.urlToUse}/project/upvote`, obj);
  }

  downVoteProject(obj:any){
    return this.http.patch(`${this.urlToUse}/project/downvote`, obj);
  }

  addComment(obj:any){
    return this.http.post(`${this.urlToUse}/comment`, obj);
  }

  getCommentForID(projectId:any){
    return this.http.get(`${this.urlToUse}/comment/project/${projectId}`);
  }

  createEvent(obj:any){
    return this.http.post(`${this.urlToUse}/event/`, obj);
  }

  getFutureEvents(){
    return this.http.get(`${this.urlToUse}/event/futureevents`);
  }

  getEventById(eventId:any){
    return this.http.get(`${this.urlToUse}/event/futureevents/${eventId}`);
  }

  registerForEvent(obj:any){
    return this.http.patch(`${this.urlToUse}/event/register`, obj);
  }

  unRegisterForEvent(obj:any){
    return this.http.patch(`${this.urlToUse}/event/unregister`, obj);
  }

  getAllPartyVotes(){
    return this.http.get(`${this.urlToUse}/party/`);
  }

  voteParty(obj:any){
    return this.http.patch(`${this.urlToUse}/party/vote`, obj);
  }

  unVoteParty(obj:any){
    return this.http.patch(`${this.urlToUse}/party/unvote`, obj);
  }

  




}
