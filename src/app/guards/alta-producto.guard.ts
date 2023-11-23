import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

export const altaProductoGuard: CanActivateFn = (route, state) => 
{
  
  let validacion = inject(AuthService).logueado
    console.log('AAAAAAAAAAAAAAAAAAAA', validacion)
  if(!validacion)
  {
    inject(ToastService).showError('Error','Debes de estar logueado para ingresar a esa opcion.')
  }
  return validacion;
};