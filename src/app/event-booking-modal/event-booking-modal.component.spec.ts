import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingModalComponent } from './event-booking-modal.component';

describe('EventBookingModalComponent', () => {
  let component: EventBookingModalComponent;
  let fixture: ComponentFixture<EventBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
