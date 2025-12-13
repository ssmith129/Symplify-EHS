import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicInputs } from './form-basic-inputs';

describe('FormBasicInputs', () => {
  let component: FormBasicInputs;
  let fixture: ComponentFixture<FormBasicInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBasicInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBasicInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
