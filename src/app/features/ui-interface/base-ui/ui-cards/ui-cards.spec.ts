import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCards } from './ui-cards';

describe('UiCards', () => {
  let component: UiCards;
  let fixture: ComponentFixture<UiCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
