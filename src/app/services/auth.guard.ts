import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserService);
  const router = inject(Router);
  return userAuth.isUserLogined() ? true : router.navigate(['sign-in']);
};
