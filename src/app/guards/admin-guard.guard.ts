import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toast = inject(ToastService)
  const router = inject(Router)

  let usuario : any;
  let retorno : boolean;

  if (authService.logueado && authService.email == 'admin@admin.com') 
  {
    retorno = true;
  } 
  else 
  {
    retorno = false;
    router.navigateByUrl("bienvenida")
    toast.showError('¡Error!','Esa opción solo es valida para administradores.')
  }
  
  return retorno;
};
