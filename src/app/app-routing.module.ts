import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { altaProductoGuard } from './guards/alta-producto.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: '', redirectTo : 'bienvenida', pathMatch : 'full'},
  { path: 'alta-producto', component: AltaProductoComponent, canActivate: [altaProductoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
