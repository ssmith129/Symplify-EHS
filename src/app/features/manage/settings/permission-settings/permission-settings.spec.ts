import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionSettings } from './permission-settings';

describe('PermissionSettings', () => {
  let component: PermissionSettings;
  let fixture: ComponentFixture<PermissionSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
