import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

pageTitle : string = "Product List";
filterText : string = "";
showImage : boolean = true;
filteredproducts : IProduct[] ;
products : IProduct[] ;

alert(rating:number):void{
  alert(rating + " clicked")
}
toggleImage():void{
  this.showImage = !this.showImage;
}

constructor(private _productService: ProductDataService) { }
 

  ngOnInit() {
    this.products=this._productService.getAllProducts();
    this.filteredproducts = this.products;
  
    console.log("inside on init")
  }
  filterProducts():void{
    this.filteredproducts = this.filterText ? this.performFilter(this.filterText) : this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: any) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
