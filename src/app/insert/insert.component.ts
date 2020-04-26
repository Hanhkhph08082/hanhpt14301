import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';

//import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
 product: Product = new Product();

// schoolForm = new FormGroup({
//     id: new FormControl(null),
//     name: new FormControl("", [
//       Validators.required,
//       Validators.minLength(4),
//       Validators.maxLength(20)
//     ])
// });
//   get name() { return this.schoolForm.get("name");}


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