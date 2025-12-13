import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFloatingLabels } from './form-floating-labels';

describe('FormFloatingLabels', () => {
  let component: FormFloatingLabels;
  let fixture: ComponentFixture<FormFloatingLabels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFloatingLabels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFloatingLabels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
