import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWeather } from './icon-weather';

describe('IconWeather', () => {
  let component: IconWeather;
  let fixture: ComponentFixture<IconWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
