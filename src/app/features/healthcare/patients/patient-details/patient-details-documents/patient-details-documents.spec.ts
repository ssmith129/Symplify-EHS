import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsDocuments } from './patient-details-documents';

describe('PatientDetailsDocuments', () => {
  let component: PatientDetailsDocuments;
  let fixture: ComponentFixture<PatientDetailsDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
