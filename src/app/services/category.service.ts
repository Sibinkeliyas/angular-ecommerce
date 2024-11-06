import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategories } from '../models/category';
import { API_BASE_URL } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private https: HttpClient) {}

  getAllCategories(): Observable<ICategories[]> {
    return this.https.get<ICategories[]>(`${API_BASE_URL}/category`);
  }
}
