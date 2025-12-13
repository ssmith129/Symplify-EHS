import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGridGutters } from './form-grid-gutters';

describe('FormGridGutters', () => {
  let component: FormGridGutters;
  let fixture: ComponentFixture<FormGridGutters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGridGutters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGridGutters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
