import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UloginnedComponent } from './uloginned.component';

describe('UloginnedComponent', () => {
  let component: UloginnedComponent;
  let fixture: ComponentFixture<UloginnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UloginnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UloginnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
