import { Injectable } from '@angular/core';
import { Product} from "../Product";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
api = 'https://5ea453ba270de600164603c3.mockapi.io/product';
 products: Product;
  constructor(private http: HttpClient) { }
getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

 deleteProduct(id):Observable<Product[]>{
  return this.http.get<Product[]>(`${this.api}/${id}`)
}

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  insertProduct(product):Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }

 getbyID = (id: number) => { 
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}