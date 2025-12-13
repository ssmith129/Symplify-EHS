import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsLabResults } from './patient-details-lab-results';

describe('PatientDetailsLabResults', () => {
  let component: PatientDetailsLabResults;
  let fixture: ComponentFixture<PatientDetailsLabResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsLabResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsLabResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
