import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieHeaderComponent } from './opinie-header.component';

describe('OpinieHeaderComponent', () => {
  let component: OpinieHeaderComponent;
  let fixture: ComponentFixture<OpinieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
