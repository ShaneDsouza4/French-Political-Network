import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../interface/question';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuizResult } from '../interface/quiz-result';
import { ProjectService } from '../service/project.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quiz-questions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
    TranslateModule
  ],
  templateUrl: './quiz-questions.component.html',
  styleUrl: './quiz-questions.component.css'
})
export class QuizQuestionsComponent {
  @Output() finalResult = new EventEmitter();

  questions:any[] = []
  selected = {} as Question;

  //result = {} as QuizResult;
  result:any

  index:number = 0;

  answer: string = "";

  //Politics
  interests:any[]=[]

  spinner:boolean = false;

  constructor(private _projectService: ProjectService){
    this.questions = []
    this.reset();
  }

  showQuestions(index:number){
    this.selected = this.questions[index];
  }

  nextQuestion(){
    if(this.answer == '') return;
    this.checkAnswer();
    this.index++;
    if(this.questions.length > this.index){
      this.answer = "";
      this.showQuestions(this.index);
    }else{
      this.finishQuiz();
    }
  }

  checkAnswer(){
    if(this.questions[this.index].correct_answers[this.answer] == "true"){
      this.interests.push(this.questions[this.index].ValueToAdd)
    }

    //let isAnswer = this.questions[this.index].correct_answers[this.answer];
    //(isAnswer == 'true') ? this.result.correct++ : this.result.wrong++;
  }

  finishQuiz(){
    this.spinner = true
    console.log("Final Array: ", this.interests)
    let payLoad:any = {
      "interests":this.interests
    }
    console.log(payLoad)
    this._projectService.partyQuiz(payLoad).subscribe((res:any)=>{
      
      if(res.status == 1){
        this.spinner = false
        console.log("Response: ", res);
        this.finalResult.emit(res.result);
      }else{
        this.spinner = false
      }
      
    })
    // this.result.total = this.questions.length;
    // this.result.correctPercentage = (this.result.correct / this.result.total) * 100;
    // this.result.wrongPercentage = (this.result.wrong / this.result.total) * 100;
    // //console.log("Result: ",this.result)
    // this.finalResult.emit(this.result);
  }

  reset(){
    this.answer = '';
    this.index = 0;
    this.result = {
      total:0,
      correct: 0,
      wrong: 0,
      correctPercentage: 0,
      wrongPercentage:0
    }
    this.interests = []
  }
}
