import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsPrescription } from './patient-details-prescription';

describe('PatientDetailsPrescription', () => {
  let component: PatientDetailsPrescription;
  let fixture: ComponentFixture<PatientDetailsPrescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsPrescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsPrescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
