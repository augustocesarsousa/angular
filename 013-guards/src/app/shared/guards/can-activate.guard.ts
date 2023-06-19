import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  if (
    route.queryParams['user'] === 'admin' &&
    route.queryParams['password'] === '1234'
  ) {
    return true;
  }

  return false;
};
