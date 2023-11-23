import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const registerGuard: CanActivateFn = (route, state) => 
{
  const authService = inject(AuthService);
  const toast = inject(ToastService)
  const router = inject(Router)

  if(!authService.enRegistro)
  {
    toast.showError('Error','Debes de registrarte para salir de esta pagina')
    router.navigateByUrl('register')
  }

  return authService.enRegistro;
};
