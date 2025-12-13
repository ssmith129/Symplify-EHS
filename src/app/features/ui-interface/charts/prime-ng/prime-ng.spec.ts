import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNg } from './prime-ng';

describe('PrimeNg', () => {
  let component: PrimeNg;
  let fixture: ComponentFixture<PrimeNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
