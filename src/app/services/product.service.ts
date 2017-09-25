import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  constructor(public http: Http) {
    console.log('Product Service Connected');
  }

  getProducts(keyword: string, page: number) {
    return this.http.get('http://localhost/api/search?keyword=' + keyword + '&page=' + page).map(res => res.json());
  }

  getProductInfo(id: number) {
    return this.http.get('http://localhost/api/products/' + id).map(res => res.json());
  }
}
