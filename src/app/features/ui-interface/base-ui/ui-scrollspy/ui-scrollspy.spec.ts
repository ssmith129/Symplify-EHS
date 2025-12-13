import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiScrollspy } from './ui-scrollspy';

describe('UiScrollspy', () => {
  let component: UiScrollspy;
  let fixture: ComponentFixture<UiScrollspy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiScrollspy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiScrollspy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
