import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartVisits } from './start-visits';

describe('StartVisits', () => {
  let component: StartVisits;
  let fixture: ComponentFixture<StartVisits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartVisits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartVisits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
