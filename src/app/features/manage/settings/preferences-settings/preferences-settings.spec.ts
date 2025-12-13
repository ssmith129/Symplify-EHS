import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesSettings } from './preferences-settings';

describe('PreferencesSettings', () => {
  let component: PreferencesSettings;
  let fixture: ComponentFixture<PreferencesSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
