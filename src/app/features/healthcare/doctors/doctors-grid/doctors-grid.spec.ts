import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsGrid } from './doctors-grid';

describe('DoctorsGrid', () => {
  let component: DoctorsGrid;
  let fixture: ComponentFixture<DoctorsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
