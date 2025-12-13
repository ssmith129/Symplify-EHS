import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartApex } from './chart-apex';

describe('ChartApex', () => {
  let component: ChartApex;
  let fixture: ComponentFixture<ChartApex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartApex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartApex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
