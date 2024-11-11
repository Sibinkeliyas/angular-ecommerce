import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { AUTH } from '../models/enum';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const sessionService = inject(SessionService);
    const session = sessionService.getSession(AUTH.ACCESS_TOKEN_KEY);
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: session ? `Bearer ${session}` : '',
      },
    });
    return next(cloneReq);
  } catch (error) {
    return next(req);
  }
};
