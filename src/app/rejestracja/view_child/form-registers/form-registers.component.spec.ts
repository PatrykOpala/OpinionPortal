import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistersComponent } from './form-registers.component';

describe('FormRegistersComponent', () => {
  let component: FormRegistersComponent;
  let fixture: ComponentFixture<FormRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
