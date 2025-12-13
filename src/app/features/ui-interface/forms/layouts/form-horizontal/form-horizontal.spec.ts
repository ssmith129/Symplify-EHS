import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontal } from './form-horizontal';

describe('FormHorizontal', () => {
  let component: FormHorizontal;
  let fixture: ComponentFixture<FormHorizontal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHorizontal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHorizontal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
