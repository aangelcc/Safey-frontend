import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommentService } from '../../services/comment.service';
import { Product } from '../../interfaces/product';
import { Comment } from '../../interfaces/comment';

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
  constructor(route: ActivatedRoute, private productService: ProductService, private commentService: CommentService) {
    this.productId = Number(route.snapshot.params['id']);
  }

  ngOnInit() {
    this.getProductInfo();
    this.getProductComment(1);
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

}
