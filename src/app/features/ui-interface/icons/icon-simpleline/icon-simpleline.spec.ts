import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSimpleline } from './icon-simpleline';

describe('IconSimpleline', () => {
  let component: IconSimpleline;
  let fixture: ComponentFixture<IconSimpleline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSimpleline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSimpleline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
