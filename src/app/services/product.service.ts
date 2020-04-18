import { Injectable } from '@angular/core';
import { Product} from "../Product";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
api = 'https://5e7afbef0e04630016332833.mockapi.io/product';
 products: Product;
  constructor(private http: HttpClient) { }
getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

 deleteProduct(id):Observable<Product[]>{
  return this.http.get<Product[]>(`${this.api}/${id}`)
}

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  insertProduct(product):Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }
  // @ts-ignore
  getbyID = (id: number) => {
    // tslint:disable-next-line:no-shadowed-variable
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}