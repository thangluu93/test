import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryTabComponent } from './order-history-tab.component';

describe('OrderHistoryTabComponent', () => {
  let component: OrderHistoryTabComponent;
  let fixture: ComponentFixture<OrderHistoryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
