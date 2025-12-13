import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsVitalSigns } from './patient-details-vital-signs';

describe('PatientDetailsVitalSigns', () => {
  let component: PatientDetailsVitalSigns;
  let fixture: ComponentFixture<PatientDetailsVitalSigns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsVitalSigns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsVitalSigns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
