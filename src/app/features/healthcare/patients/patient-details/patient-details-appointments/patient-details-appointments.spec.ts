import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsAppointments } from './patient-details-appointments';

describe('PatientDetailsAppointments', () => {
  let component: PatientDetailsAppointments;
  let fixture: ComponentFixture<PatientDetailsAppointments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsAppointments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsAppointments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
