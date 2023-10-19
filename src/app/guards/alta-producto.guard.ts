import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const altaProductoGuard: CanActivateFn = (route, state) => 
{
  let validacion = inject(AuthService).logueado
  console.log(validacion);
  return validacion;
};