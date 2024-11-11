import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../../config';
import { Observable } from 'rxjs';
import { ILoginApiResponse } from '../models/auth';
import { SessionService } from './session.service';
import { AUTH } from '../models/enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  sessionService = inject(SessionService);

  userLogin(email: string, password: string): Observable<ILoginApiResponse> {
    return this.http.get<ILoginApiResponse>(
      `${API_BASE_URL}/authentication/${email}/${password}`
    );
  }

  isUserLogined(): boolean {
    const accessToken = this.sessionService.getSession(AUTH.ACCESS_TOKEN_KEY);
    if (accessToken) return true;
    else return false;
  }
}
