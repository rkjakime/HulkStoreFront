import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Product {
  constructor(
    public productId: string,
    public name: string,
    public price: string,
    public quantity: string,
    public category: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }
     getProducts() {
    console.log('test call');
    return this.httpClient.get<Product[]>('http://localhost:8084/Products');
  }
  public deleteProduct( product ) {
    return this.httpClient.delete<Product>('http://localhost:8084/Products' + '/' + product.productId);
  }

  public createProduct( product ) {
    return this.httpClient.post<Product>('http://localhost:8084/Products', product);
  }
}
