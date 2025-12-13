import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTables } from './data-tables';

describe('DataTables', () => {
  let component: DataTables;
  let fixture: ComponentFixture<DataTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
