import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBootstrap } from './icon-bootstrap';

describe('IconBootstrap', () => {
  let component: IconBootstrap;
  let fixture: ComponentFixture<IconBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
