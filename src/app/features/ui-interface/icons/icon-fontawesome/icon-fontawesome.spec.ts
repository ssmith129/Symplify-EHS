import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFontawesome } from './icon-fontawesome';

describe('IconFontawesome', () => {
  let component: IconFontawesome;
  let fixture: ComponentFixture<IconFontawesome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFontawesome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFontawesome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
