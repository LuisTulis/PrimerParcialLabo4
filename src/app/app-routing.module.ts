import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { altaProductoGuard } from './guards/alta-producto.guard';
import { loginGuard } from './guards/login-guard.guard';
import { adminGuardGuard } from './guards/admin-guard.guard';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { ListadoPublicoProductoComponent } from './components/listado-publico-producto/listado-publico-producto.component';
import { ContainersComponent } from './components/containers/containers.component';
import { CargarContainerComponent } from './components/cargar-container/cargar-container.component';
import { RegisterComponent } from './components/register/register.component';
import { registerGuard } from './guards/register.guard';
import { TerminosComponent } from './components/terminos/terminos.component';
import { register3Guard } from './guards/register3.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: '', redirectTo : 'bienvenida', pathMatch : 'full'},
  { path: 'alta-producto', component: AltaProductoComponent, canActivate: [loginGuard]},
  { path: 'detalle-producto', component: DetalleProductoComponent, canActivate: [loginGuard]},
  { path: 'lista-producto', component: ListadoPublicoProductoComponent},
  { path: 'lista-container', component: ContainersComponent, canActivate: [adminGuardGuard]},
  { path: 'carga-container', component: CargarContainerComponent, canActivate: [loginGuard]},
  { path: 'register', component: RegisterComponent, canDeactivate : [register3Guard]},
  { path: 'terminos', component: TerminosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
