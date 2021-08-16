import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnedComponent } from './loginned.component';

describe('LoginnedComponent', () => {
  let component: LoginnedComponent;
  let fixture: ComponentFixture<LoginnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
