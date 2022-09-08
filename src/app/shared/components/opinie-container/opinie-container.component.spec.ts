import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieContainerComponent } from './opinie-container.component';

describe('OpinieContainerComponent', () => {
  let component: OpinieContainerComponent;
  let fixture: ComponentFixture<OpinieContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
