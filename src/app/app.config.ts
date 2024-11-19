import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './interceptors/jwt.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { userReducer } from './state/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'user', reducer: userReducer }),
  ],
};
