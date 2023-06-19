import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (
  childRoute,
  state
) => {
  if (
    childRoute.queryParams['user'] === 'admin' &&
    childRoute.queryParams['password'] === '1234'
  ) {
    return true;
  }

  return false;
};
