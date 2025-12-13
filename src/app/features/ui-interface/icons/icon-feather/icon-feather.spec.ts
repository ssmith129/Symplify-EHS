import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFeather } from './icon-feather';

describe('IconFeather', () => {
  let component: IconFeather;
  let fixture: ComponentFixture<IconFeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
