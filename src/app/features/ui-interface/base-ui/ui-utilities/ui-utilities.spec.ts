import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUtilities } from './ui-utilities';

describe('UiUtilities', () => {
  let component: UiUtilities;
  let fixture: ComponentFixture<UiUtilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUtilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUtilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
