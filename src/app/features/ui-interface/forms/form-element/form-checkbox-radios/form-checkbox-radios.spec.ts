import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxRadios } from './form-checkbox-radios';

describe('FormCheckboxRadios', () => {
  let component: FormCheckboxRadios;
  let fixture: ComponentFixture<FormCheckboxRadios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckboxRadios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCheckboxRadios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
