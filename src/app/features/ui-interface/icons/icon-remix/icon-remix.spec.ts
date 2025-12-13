import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRemix } from './icon-remix';

describe('IconRemix', () => {
  let component: IconRemix;
  let fixture: ComponentFixture<IconRemix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconRemix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRemix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
