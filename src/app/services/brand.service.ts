import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../config';
import { IBrands } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<IBrands[]> {
    return this.http.get<IBrands[]>(`${API_BASE_URL}/brands`);
  }
}
