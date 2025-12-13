import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtons } from './ui-buttons';

describe('UiButtons', () => {
  let component: UiButtons;
  let fixture: ComponentFixture<UiButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
