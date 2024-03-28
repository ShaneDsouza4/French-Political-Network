import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalQuizComponent } from './political-quiz.component';

describe('PoliticalQuizComponent', () => {
  let component: PoliticalQuizComponent;
  let fixture: ComponentFixture<PoliticalQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticalQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
