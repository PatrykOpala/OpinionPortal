import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieChooseCategoryItemComponent } from './opinie-choose-category-item.component';

describe('OpinieChooseCategoryItemComponent', () => {
  let component: OpinieChooseCategoryItemComponent;
  let fixture: ComponentFixture<OpinieChooseCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieChooseCategoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinieChooseCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
