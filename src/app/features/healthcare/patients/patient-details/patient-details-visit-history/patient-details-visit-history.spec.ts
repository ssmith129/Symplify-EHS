import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsVisitHistory } from './patient-details-visit-history';

describe('PatientDetailsVisitHistory', () => {
  let component: PatientDetailsVisitHistory;
  let fixture: ComponentFixture<PatientDetailsVisitHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsVisitHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsVisitHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
