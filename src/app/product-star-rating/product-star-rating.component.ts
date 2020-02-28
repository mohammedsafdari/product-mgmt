import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-star-rating',
  templateUrl: './product-star-rating.component.html',
  styleUrls: ['./product-star-rating.component.css']
})
export class ProductStarRatingComponent implements OnInit,OnChanges {
  

  @Input() rating:number;
  starWidth : number = 70;

  @Output() parentRating: EventEmitter<number> 
  = new EventEmitter<number>();

  ratingClicked():void{
    this.parentRating.emit(this.starWidth)
  }

  ngOnChanges(): void {
   this.starWidth= 14 * this.rating;
  }
  constructor() { }

  ngOnInit() {
  }

}
