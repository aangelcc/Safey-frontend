import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CommentService {

  constructor(public http: Http) {
    console.log('Comment Service Connected');
  }

  getProductComment(productId: number, page: number) {
    return this.http.get('http://localhost/api/product-comment?id=' + productId + '&page=' + page).map(res => res.json());
  }

  makeComment(comment: string, user_id: number, product_rating: number, product_id, token: string){
    const args: RequestOptions = new RequestOptions({headers: new Headers()});

    return this.http.post('http://localhost/api/comments', JSON.stringify({
      comment: comment,
      user_id: user_id,
      product_rating: product_rating,
      comment_rating: 0,
      product_id: product_id
    }), args).map(res => res.json());
  }

}
