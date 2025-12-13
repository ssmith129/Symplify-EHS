import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsMedicalHistory } from './patient-details-medical-history';

describe('PatientDetailsMedicalHistory', () => {
  let component: PatientDetailsMedicalHistory;
  let fixture: ComponentFixture<PatientDetailsMedicalHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsMedicalHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsMedicalHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
