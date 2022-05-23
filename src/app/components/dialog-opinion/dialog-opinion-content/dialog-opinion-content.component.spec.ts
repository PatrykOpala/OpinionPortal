import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpinionContentComponent } from './dialog-opinion-content.component';

describe('DialogOpinionContentComponent', () => {
  let component: DialogOpinionContentComponent;
  let fixture: ComponentFixture<DialogOpinionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpinionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOpinionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
