import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CommentService {

  constructor(public http: Http) {
    console.log('Comment Service Connected');
  }

  getProductComment(productId: number, page: number) {
    return this.http.get('http://localhost/api/product-comment?id=' + productId+'&page=' + page).map(res => res.json());
  }

}
