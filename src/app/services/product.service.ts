import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../config';
import { Observable } from 'rxjs';
import { IProduct, IProducts } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getSaleProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(
      `${API_BASE_URL}/products/find-sale-products`
    );
  }

  getAllProducts(): Observable<{
    totalProducts: number;
    products: IProducts[];
  }> {
    return this.http.get<{ totalProducts: number; products: IProducts[] }>(
      `${API_BASE_URL}/products`
    );
  }

  getFilteredProducts(
    query: string
  ): Observable<{ totalProducts: number; products: IProducts[] }> {
    return this.http.get<{ totalProducts: number; products: IProducts[] }>(
      `${API_BASE_URL}/products/find-filtered-products${query}`
    );
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${API_BASE_URL}/products/${id}`);
  }
}
