import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieContentComponent } from './opinie-content.component';

describe('OpinieContentComponent', () => {
  let component: OpinieContentComponent;
  let fixture: ComponentFixture<OpinieContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
