import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISize } from "../models/size";
import { API_BASE_URL } from "../../config";

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  constructor(private http: HttpClient) {}

  getAllSizes(): Observable<ISize[]> {
    return this.http.get<ISize[]>(`${API_BASE_URL}/sizes`)
  }
}