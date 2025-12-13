import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconIonic } from './icon-ionic';

describe('IconIonic', () => {
  let component: IconIonic;
  let fixture: ComponentFixture<IconIonic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconIonic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconIonic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
