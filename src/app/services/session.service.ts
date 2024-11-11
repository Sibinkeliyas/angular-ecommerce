import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  setSession(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  removeSession(key: string) {
    return localStorage.removeItem(key);
  }

  getSession(key: string) {
    return localStorage.getItem(key);
  }
}
