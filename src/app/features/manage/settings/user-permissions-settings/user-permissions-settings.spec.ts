import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionsSettings } from './user-permissions-settings';

describe('UserPermissionsSettings', () => {
  let component: UserPermissionsSettings;
  let fixture: ComponentFixture<UserPermissionsSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPermissionsSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPermissionsSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
