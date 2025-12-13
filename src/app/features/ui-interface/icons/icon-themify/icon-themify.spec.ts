import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconThemify } from './icon-themify';

describe('IconThemify', () => {
  let component: IconThemify;
  let fixture: ComponentFixture<IconThemify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconThemify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconThemify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
