import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[];
  keyword: string;
  page: number;
  currentPage: number;
  lastPage: number;
  pages: number[];
  numberOfPages: number;
  nextPageUrl: string;
  previousPageUrl: string;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.keyword = this.route.snapshot.params['keyword'];
    this.page = Number(this.route.snapshot.params['page']);
    this.searchProduct();
  }

  search(page: number) {
    this.router.navigateByUrl('search/' + this.keyword + '/' + page);
    this.page = page;
    this.searchProduct();
  }

  searchProduct() {
    this.productService.getProducts(this.keyword, this.page).subscribe((products) => {
      this.products = products['data'];
      this.currentPage = products['current_page'];
      this.lastPage = products['last_page'];
      this.pages = Array.from(Array(products['last_page']), (x, i) => i);
      this.numberOfPages = this.pages.length;
      this.nextPageUrl = products['next_page_url'];
      this.previousPageUrl = products['prev_page_url'];
    });
  }

}
