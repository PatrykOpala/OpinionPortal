import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCompanyComponent } from './account-company.component';

describe('AccountCompanyComponent', () => {
  let component: AccountCompanyComponent;
  let fixture: ComponentFixture<AccountCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
