import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductDataService {

  productServiceURL = "assets/api/products/products.json";
  filterBy = new BehaviorSubject<string>(undefined);
  constructor(private _http: HttpClient) { }
  products: IProduct[];

  getAllProducts():IProduct[] {
    return this.products;
  } 

  getAllProductObservable(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productServiceURL);
  }

  getProductsByProductId(id: number): IProduct {
    let product = this.products.find(p => p.productId === id)
    return product;
  }

  appServiceInit(): Promise<any> {
    return this.getAllProductObservable().toPromise().then(
      data => {
        this.products = data;
      }
    )
  }
}
