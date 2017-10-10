import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommentService } from '../../services/comment.service';
import { Product } from '../../interfaces/product';
import { Comment } from '../../interfaces/comment';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number;
  product: Product;
  comments: Comment[];
  currentPage: number;
  lastPage: number;
  pages: number[];
  numberOfPages: number;
  nextPageUrl: string;
  previousPageUrl: string;
  token: string = null;
  user: User = null;
  comment: string;
  product_rating: number;

  constructor(route: ActivatedRoute, private productService: ProductService, private commentService: CommentService, private userService: UserService) {
    this.productId = Number(route.snapshot.params['id']);
    this.token = userService.token;
    this.user = userService.user;
  }

  ngOnInit() {
    this.getProductInfo();
    this.getProductComment(1);
    this.comment = '';
    this.product_rating = 5;
  }

  getProductInfo() {
    this.productService.getProductInfo(this.productId).subscribe((product) => {
      this.product = product;
    });
  }

  getProductComment(page: number) {
    this.commentService.getProductComment(this.productId, page).subscribe((comments) =>{
        this.comments = comments['data'];
        this.currentPage = comments['current_page'];
        this.lastPage = comments['last_page'];
        this.pages = Array.from(Array(comments['last_page']), (x, i) => i);
        this.numberOfPages = this.pages.length;
        this.nextPageUrl = comments['next_page_url'];
        this.previousPageUrl = comments['prev_page_url'];
    });
  }

  sendComment() {
    console.log('holaaaaaa');
    this.commentService.makeComment(this.comment, this.user.id, this.product_rating, this.productId, this.token).subscribe((res) => {
      console.log(res['message']);
    });
  }

}
