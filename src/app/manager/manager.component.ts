import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
   page=1;
  pageSize=5;
  products: Product[];
  new: Product;
  constructor(private productService: ProductService,
  private router: Router) { }

  ngOnInit() {
    this.getproduct();
  }
 getproduct(): void {
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
    });

  }
  deleteproduct(id){
  this.productService.deleteProduct(id).subscribe(response =>{
  this.products=this.products.filter(product => product.id !=response.id)
  })
}
  getid(id): void {
    this.router.navigate(['/Edit', id]);
  }
  detail(id): void {
    this.router.navigate(['/Details', id]);
  }
  add(): void {
    this.router.navigate(['/Add']);
  }

}