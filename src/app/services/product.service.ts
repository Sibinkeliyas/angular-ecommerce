import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../config';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product';

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

  getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${API_BASE_URL}/products`);
  }
}
