import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTabler } from './icon-tabler';

describe('IconTabler', () => {
  let component: IconTabler;
  let fixture: ComponentFixture<IconTabler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTabler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTabler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
