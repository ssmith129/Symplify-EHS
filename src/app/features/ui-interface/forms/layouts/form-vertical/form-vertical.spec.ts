import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVertical } from './form-vertical';

describe('FormVertical', () => {
  let component: FormVertical;
  let fixture: ComponentFixture<FormVertical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVertical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVertical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
