import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModals } from './ui-modals';

describe('UiModals', () => {
  let component: UiModals;
  let fixture: ComponentFixture<UiModals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiModals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
