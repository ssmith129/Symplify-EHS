import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansBillingsSettings } from './plans-billings-settings';

describe('PlansBillingsSettings', () => {
  let component: PlansBillingsSettings;
  let fixture: ComponentFixture<PlansBillingsSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansBillingsSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansBillingsSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
