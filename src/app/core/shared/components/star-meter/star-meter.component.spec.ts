import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMeterComponent } from './star-meter.component';

describe('StarMeterComponent', () => {
  let component: StarMeterComponent;
  let fixture: ComponentFixture<StarMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
