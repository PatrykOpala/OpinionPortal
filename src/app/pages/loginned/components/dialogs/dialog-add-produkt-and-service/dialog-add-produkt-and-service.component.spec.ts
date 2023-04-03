import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProduktAndServiceComponent } from './dialog-add-produkt-and-service.component';

describe('DialogAddProduktAndServiceComponent', () => {
  let component: DialogAddProduktAndServiceComponent;
  let fixture: ComponentFixture<DialogAddProduktAndServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddProduktAndServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddProduktAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
