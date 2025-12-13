import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTypicon } from './icon-typicon';

describe('IconTypicon', () => {
  let component: IconTypicon;
  let fixture: ComponentFixture<IconTypicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTypicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTypicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
