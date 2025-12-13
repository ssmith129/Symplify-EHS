import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsGrid } from './patients-grid';

describe('PatientsGrid', () => {
  let component: PatientsGrid;
  let fixture: ComponentFixture<PatientsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
