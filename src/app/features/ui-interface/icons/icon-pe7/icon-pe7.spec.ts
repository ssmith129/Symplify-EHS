import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPe7 } from './icon-pe7';

describe('IconPe7', () => {
  let component: IconPe7;
  let fixture: ComponentFixture<IconPe7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPe7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPe7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
