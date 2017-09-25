import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[];
  keyword: string;
  currentPage: number;
  lastPage: number;
  pages: number[];
  numberOfPages: number;
  nextPageUrl: string;
  previousPageUrl: string;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.keyword = '';
    this.searchProduct(1);
  }

  searchProduct(page: number) {
    this.productService.getProducts(this.keyword, page).subscribe((products) => {
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
