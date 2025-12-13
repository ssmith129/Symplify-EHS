import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditors } from './form-editors';

describe('FormEditors', () => {
  let component: FormEditors;
  let fixture: ComponentFixture<FormEditors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
