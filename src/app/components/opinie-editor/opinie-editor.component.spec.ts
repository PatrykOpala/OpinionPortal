import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinieEditorComponent } from './opinie-editor.component';

describe('OpinieEditorComponent', () => {
  let component: OpinieEditorComponent;
  let fixture: ComponentFixture<OpinieEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinieEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinieEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
