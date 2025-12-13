import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsInsurance } from './patient-details-insurance';

describe('PatientDetailsInsurance', () => {
  let component: PatientDetailsInsurance;
  let fixture: ComponentFixture<PatientDetailsInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsInsurance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
