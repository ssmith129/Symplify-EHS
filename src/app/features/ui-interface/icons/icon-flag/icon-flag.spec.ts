import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFlag } from './icon-flag';

describe('IconFlag', () => {
  let component: IconFlag;
  let fixture: ComponentFixture<IconFlag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFlag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFlag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
