import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rangeslider } from './rangeslider';

describe('Rangeslider', () => {
  let component: Rangeslider;
  let fixture: ComponentFixture<Rangeslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rangeslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rangeslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
