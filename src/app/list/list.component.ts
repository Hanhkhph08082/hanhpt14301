import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import { ProductService } from '../services/product.service';
// import { Route } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 products: Product[];
  constructor(
    private productService: ProductService
    // private router: Route
    ) { }

  ngOnInit() {
   this. getproduct()
  }
getproduct(){
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
    });
  }
  //  detail(id): void {
  //   this.router.navigate(['/Details', id]);
  // }
}