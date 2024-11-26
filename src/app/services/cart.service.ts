import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartApiResponse, ICartItemsProps } from '../models/cart';
import { API_BASE_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(item: ICartItemsProps): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/cart`, {
      productId: item.productId,
      quantity: item.quantity,
    });
  }
  getCartItems(): Observable<ICartApiResponse[]> {
    return this.http.get<ICartApiResponse[]>(`${API_BASE_URL}/cart`);
  }
  updateCartItems(data:any[]): Observable<any> {
    return this.http.patch<any>(`${API_BASE_URL}/cart`, data);
  }
}
