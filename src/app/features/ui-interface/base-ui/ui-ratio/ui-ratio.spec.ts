import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRatio } from './ui-ratio';

describe('UiRatio', () => {
  let component: UiRatio;
  let fixture: ComponentFixture<UiRatio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiRatio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRatio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
