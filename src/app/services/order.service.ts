import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/order';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(orders: IOrder): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/order`,  orders );
  }
}
