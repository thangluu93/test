import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProcessingTabComponent } from './order-processing-tab.component';

describe('OrderProcessingTabComponent', () => {
  let component: OrderProcessingTabComponent;
  let fixture: ComponentFixture<OrderProcessingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderProcessingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProcessingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
