import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltips } from './ui-tooltips';

describe('UiTooltips', () => {
  let component: UiTooltips;
  let fixture: ComponentFixture<UiTooltips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTooltips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTooltips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
