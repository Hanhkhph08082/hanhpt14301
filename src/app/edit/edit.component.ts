import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import{ActivatedRoute, Router} from '@angular/router';
import { Product } from '../Product';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
product:Product;
  constructor(  private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  
     this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productService.getbyID(id).subscribe(data => {
        this.product = data;
      });
    });
  }
Update(product: Product) {
    this.productService.updateProduct(product).subscribe(value =>{
      console.log(value);
    });
  }
}