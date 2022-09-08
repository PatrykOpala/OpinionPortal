import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieChooseCategoryComponent } from './opinie-choose-category.component';

describe('OpinieChooseCategoryComponent', () => {
  let component: OpinieChooseCategoryComponent;
  let fixture: ComponentFixture<OpinieChooseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieChooseCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinieChooseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
