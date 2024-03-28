import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
    TranslateModule
  ],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent {

  @Output() showMainMenuScreen = new EventEmitter();
  finalResult : any; 

  showMainMenu(){
    this.showMainMenuScreen.emit(true);
  }

}
