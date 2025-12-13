import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentConsultation } from './appointment-consultation';

describe('AppointmentConsultation', () => {
  let component: AppointmentConsultation;
  let fixture: ComponentFixture<AppointmentConsultation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentConsultation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentConsultation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
