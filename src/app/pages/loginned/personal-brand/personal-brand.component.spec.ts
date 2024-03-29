import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBrandComponent } from './personal-brand.component';

describe('PersonalBrandComponent', () => {
  let component: PersonalBrandComponent;
  let fixture: ComponentFixture<PersonalBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
