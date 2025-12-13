import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBasic } from './tables-basic';

describe('TablesBasic', () => {
  let component: TablesBasic;
  let fixture: ComponentFixture<TablesBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
