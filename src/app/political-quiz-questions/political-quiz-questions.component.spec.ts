import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalQuizQuestionsComponent } from './political-quiz-questions.component';

describe('PoliticalQuizQuestionsComponent', () => {
  let component: PoliticalQuizQuestionsComponent;
  let fixture: ComponentFixture<PoliticalQuizQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticalQuizQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticalQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
