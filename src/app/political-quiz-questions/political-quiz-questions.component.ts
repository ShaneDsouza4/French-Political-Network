import { Component } from '@angular/core';

@Component({
  selector: 'app-political-quiz-questions',
  standalone: true,
  imports: [],
  templateUrl: './political-quiz-questions.component.html',
  styleUrl: './political-quiz-questions.component.css'
})
export class PoliticalQuizQuestionsComponent {


  listOfQuestions:any []=[
    {
      question:"Which government would you prefer?",
      option1:"Limited government, traditional values.",
      option2:"Active government, social safety nets."
    },
    {
      question:"Which approach to technology do you prefer for your country?",
      option1:"A country that prioritizes innovation and technological advancement, even if it means some risks and disruptions to traditional ways of life.",
      option2:"A country that exercises caution with technology, prioritizing stability and preserving traditional values, even if it means slower progress."
    }

  ]

  constructor(){

  }
}
