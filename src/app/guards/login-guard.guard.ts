import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

export const loginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const toast = inject(ToastService)
  const router = inject(Router)

  let usuario : any;
  let retorno : boolean;
  
    if (authService.logueado) 
    {
      console.log(usuario);
    } 
    else 
    {
      router.navigateByUrl("bienvenida")
      toast.showError('¡Error!','Esa opción solo es valida para usuarios logueados.')
    }
  
  return authService.logueado;
};