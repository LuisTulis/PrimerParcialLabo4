import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {environment} from '../environments/environment';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component'
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { ListadoPublicoProductoComponent } from './components/listado-publico-producto/listado-publico-producto.component';
import { UnicoProductoComponent } from './components/unico-producto/unico-producto.component';
import { DetallesPaisComponent } from './components/detalles-pais/detalles-pais.component';
import { ContainersComponent } from './components/containers/containers.component';
import { BorrarContainerComponent } from './components/borrar-container/borrar-container.component';
import { CrearContainerComponent } from './components/crear-container/crear-container.component';
import { ModificarContainerComponent } from './components/modificar-container/modificar-container.component';
import { CargarContainerComponent } from './components/cargar-container/cargar-container.component';
import { RegisterComponent } from './components/register/register.component';
import { TerminosComponent } from './components/terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    DetalleProductoComponent,
    ListadoProductoComponent,
    ListadoPublicoProductoComponent,
    UnicoProductoComponent,
    DetallesPaisComponent,
    ContainersComponent,
    BorrarContainerComponent,
    CrearContainerComponent,
    ModificarContainerComponent,
    CargarContainerComponent,
    RegisterComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
