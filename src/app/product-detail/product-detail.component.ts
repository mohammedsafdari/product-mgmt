import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  constructor(private _route: ActivatedRoute,
    private _productService: ProductDataService,
    private router: Router) { }

  pageTitle: string = "Product"
  product: IProduct;


  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.product = this._productService.getProductsByProductId(id);
    if (this.product == undefined) {
      this.router.navigate([""])
    }
  }
}
