import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPickers } from './form-pickers';

describe('FormPickers', () => {
  let component: FormPickers;
  let fixture: ComponentFixture<FormPickers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPickers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPickers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
