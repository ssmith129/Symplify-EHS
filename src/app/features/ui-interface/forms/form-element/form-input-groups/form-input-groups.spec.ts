import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputGroups } from './form-input-groups';

describe('FormInputGroups', () => {
  let component: FormInputGroups;
  let fixture: ComponentFixture<FormInputGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
