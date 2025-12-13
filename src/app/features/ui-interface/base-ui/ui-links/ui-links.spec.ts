import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLinks } from './ui-links';

describe('UiLinks', () => {
  let component: UiLinks;
  let fixture: ComponentFixture<UiLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
