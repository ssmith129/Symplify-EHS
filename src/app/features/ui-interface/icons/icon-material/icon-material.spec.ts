import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMaterial } from './icon-material';

describe('IconMaterial', () => {
  let component: IconMaterial;
  let fixture: ComponentFixture<IconMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
