import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentTestComponent } from './view-appointment-test.component';

describe('ViewAppointmentTestComponent', () => {
  let component: ViewAppointmentTestComponent;
  let fixture: ComponentFixture<ViewAppointmentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
