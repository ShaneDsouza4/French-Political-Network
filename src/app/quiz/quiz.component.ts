import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuizService } from '../service/quiz.service';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';
import { Question } from '../interface/question';
import { QuizResultComponent } from '../quiz-result/quiz-result.component';
import { PoliticalQuizQuestionsComponent } from '../political-quiz-questions/political-quiz-questions.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
    QuizQuestionsComponent,
    QuizResultComponent,
    PoliticalQuizQuestionsComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  questionsLimit: number;
  difficulty:any;

  showQuizScreen: boolean = false;
  showMainMenu: boolean = true;
  showResultScreen : boolean = false;

  spinner: boolean = false;

  showPoliticQuestions:boolean = false

  
  @ViewChild('quiz',{static:true}) quiz! : QuizQuestionsComponent;
  @ViewChild('result',{static:true}) result! : QuizResultComponent;


  quizQuestionList:any = [
    {
      "id": "4",
      "question": "Who was the first female Prime Minister of France?",
      "description": "Identify the trailblazing woman who held the position of Prime Minister in France.",
      "answers": {
        "answer_a": "Édith Cresson",
        "answer_b": "Simone Veil",
        "answer_c": "Ségolène Royal",
        "answer_d": "Élisabeth Guigou"
      },
      "multiple_correct_answers": false,
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": "Édith Cresson became the first female Prime Minister of France in 1991.",
      "tip": "Look into notable figures in French political history.",
      "tags": [
        "Politics",
        "France",
        "Leadership"
      ],
      "category": null,
      "difficulty": "Easy"
    },
    {
      "id": "2",
      "question": "What is the official residence of the President of France?",
      "description": "Identify the main residence of the President of France.",
      "answers": {
        "answer_a": "Élysée Palace",
        "answer_b": "Louvre Palace",
        "answer_c": "Versailles Palace",
        "answer_d": "Palais Bourbon"
      },
      "multiple_correct_answers": false,
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": "The Élysée Palace serves as the official residence of the President of France.",
      "tip": "Focus on the prominent landmarks associated with French politics.",
      "tags": [
        "Politics",
        "France",
        "Landmarks"
      ],
      "category": null,
      "difficulty": "Easy"
    },
    {
      "id": "1",
      "question": "Who is the current President of France?",
      "description": "Identify the current head of state in France.",
      "answers": {
        "answer_a": "Emmanuel Macron",
        "answer_b": "François Hollande",
        "answer_c": "Nicolas Sarkozy",
        "answer_d": "Jacques Chirac"
      },
      "multiple_correct_answers": false,
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": "Emmanuel Macron is the current President of France, having assumed office on May 14, 2017.",
      "tip": "Keep track of recent political developments in France.",
      "tags": [
        "Politics",
        "France",
        "Current Affairs"
      ],
      "category": null,
      "difficulty": "Easy"
    },
    {
      "id": "16",
      "question": "Who was the longest-serving President of France?",
      "description": "Identify the President of France who served the longest term in office.",
      "answers": {
        "answer_a": "François Mitterrand",
        "answer_b": "Charles de Gaulle",
        "answer_c": "Georges Pompidou",
        "answer_d": "Jacques Chirac"
      },
      "multiple_correct_answers": false,
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": "François Mitterrand served as the President of France for two consecutive terms from 1981 to 1995, making him the longest-serving President.",
      "tip": "Look into the tenure of different French presidents.",
      "tags": [
        "Politics",
        "France",
        "Presidency"
      ],
      "category": null,
      "difficulty": "Easy"
    },
    {
      "id": "5",
      "question": "What is the French term for the head of government?",
      "description": "Identify the title given to the chief executive in France.",
      "answers": {
        "answer_a": "Président",
        "answer_b": "Premier Ministre",
        "answer_c": "Chef de l'État",
        "answer_d": "Ministre de l'Intérieur"
      },
      "multiple_correct_answers": false,
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_b",
      "explanation": "The head of government in France is referred to as the Premier Ministre.",
      "tip": "Focus on the specific roles in the French political system.",
      "tags": [
        "Politics",
        "France",
        "Government"
      ],
      "category": null,
      "difficulty": "Easy"
    }
  ]
 

  constructor(private quizService: QuizService){
    this.questionsLimit = 5;
    this.difficulty = "Easy";
    this.showMainMenu = true;
    //let quizListX:any = localStorage.getItem('quizQuestionList');
    //this.quizQuestionList = JSON.parse(quizListX);
  }
  ngOnInit(): void {
    
  }

  getQuizQuestions(){
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty, this.questionsLimit).subscribe((res:any)=>{
      console.log("Response: ", res);
      //console.log("Response", res);
      //this.quiz.questions = res;
      this.quiz.questions = this.quizQuestionList;
      this.quiz.reset();
      this.quiz.showQuestions(0);
      this.showMainMenu = false;
      this.showQuizScreen = true;
      this.toggleSpinner();
    })
  }

  toggleSpinner(){
    this.spinner = !this.spinner;
  }

  finalResult(result:any){
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }

  showMainMenuScreen(event:any){
    this.showResultScreen = false;
    this.showMainMenu = true;
  }

  getPoliticalQuizQuestions(){
    this.toggleSpinner();
    this.showPoliticQuestions = true
  }

 
  
}
