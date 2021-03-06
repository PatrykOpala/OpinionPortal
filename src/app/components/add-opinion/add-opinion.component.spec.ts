import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpinionComponent } from './add-opinion.component';

describe('AddOpinionDialogComponent', () => {
  let component: AddOpinionComponent;
  let fixture: ComponentFixture<AddOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
