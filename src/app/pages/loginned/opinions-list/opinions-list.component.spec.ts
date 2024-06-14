import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsListComponent } from './opinions-list.component';

describe('OpinionsListComponent', () => {
  let component: OpinionsListComponent;
  let fixture: ComponentFixture<OpinionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpinionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
