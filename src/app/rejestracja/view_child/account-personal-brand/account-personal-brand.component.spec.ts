import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPersonalBrandComponent } from './account-personal-brand.component';

describe('AccountPersonalBrandComponent', () => {
  let component: AccountPersonalBrandComponent;
  let fixture: ComponentFixture<AccountPersonalBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPersonalBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPersonalBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
