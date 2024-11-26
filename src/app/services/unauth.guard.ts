import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common';

export const unAuthGuard: CanActivateFn = () => {
  const userAuth = inject(UserService);
  const location = inject(Location);
  if (userAuth.isUserLogined()) {
    location.back();
    return false;
  }
  return true;
};
