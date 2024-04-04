import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoswhoComponent } from './whoswho.component';

describe('WhoswhoComponent', () => {
  let component: WhoswhoComponent;
  let fixture: ComponentFixture<WhoswhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoswhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoswhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
