import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFileupload } from './form-fileupload';

describe('FormFileupload', () => {
  let component: FormFileupload;
  let fixture: ComponentFixture<FormFileupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFileupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFileupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
