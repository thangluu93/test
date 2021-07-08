import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoTabComponent } from './account-info-tab.component';

describe('AccountInfoTabComponent', () => {
  let component: AccountInfoTabComponent;
  let fixture: ComponentFixture<AccountInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
