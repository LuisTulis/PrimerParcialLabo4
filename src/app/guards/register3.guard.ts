import { CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { inject } from '@angular/core';

export const register3Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => 
{
  const authService = inject(AuthService);
  const toast = inject(ToastService)
  const router = inject(Router)

  if(authService.enRegistro)
  {
    toast.showError('Error','Debes de registrarte para salir de esta pagina')
    router.navigateByUrl('register')
  }

  return !authService.enRegistro;
};
