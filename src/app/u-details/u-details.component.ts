import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import{ActivatedRoute, Router} from '@angular/router';
import { Product } from '../Product';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 product: Product;
  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getbyID(id).subscribe(data => {
        this.product = data;
      });
    });
  }
  

}