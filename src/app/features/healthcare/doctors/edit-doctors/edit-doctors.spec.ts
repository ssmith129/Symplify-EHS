import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctors } from './edit-doctors';

describe('EditDoctors', () => {
  let component: EditDoctors;
  let fixture: ComponentFixture<EditDoctors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDoctors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDoctors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
