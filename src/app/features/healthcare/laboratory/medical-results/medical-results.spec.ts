import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalResults } from './medical-results';

describe('MedicalResults', () => {
  let component: MedicalResults;
  let fixture: ComponentFixture<MedicalResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
