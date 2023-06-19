import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../account/account.component';

export const canDeactivateGuard: CanDeactivateFn<AccountComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.voltar();
};
