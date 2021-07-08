import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeHighlightComponent} from './home-highlight.component';

describe('HomeHighlightComponent', () => {
  let component: HomeHighlightComponent;
  let fixture: ComponentFixture<HomeHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHighlightComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
