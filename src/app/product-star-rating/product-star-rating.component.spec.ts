import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStarRatingComponent } from './product-star-rating.component';

describe('ProductStarRatingComponent', () => {
  let component: ProductStarRatingComponent;
  let fixture: ComponentFixture<ProductStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
