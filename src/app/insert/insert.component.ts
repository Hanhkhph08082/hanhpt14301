import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
 product: Product = new Product();



  constructor(
    private productService: ProductService,
    private route:Router
  ) { }

  ngOnInit() {
  }
  
  Save() {
   this. productService.insertProduct(this.product).subscribe(data => 
     this.route.navigateByUrl('/Manager') );
  }
}