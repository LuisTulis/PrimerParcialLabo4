import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/classes/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {

  constructor(private firestore : FirestoreService, private router : Router) {}

  codigoIngresado : string = "";
  esComestible : boolean = false;
  descripcionIngresada : string = "";
  precioIngresado : number = 0;
  stockIngresado : number  = 0;
  errorMessage = "";
  logeoExitoso = false;

  paisSeleccionado : any;

  async guardarProducto()
  {
    if(this.codigoIngresado != "" && this.descripcionIngresada != "" && this.precioIngresado != 0 && this.stockIngresado != 0 && this.paisSeleccionado != "")
    {
      let producto = new Producto(this.codigoIngresado,this.descripcionIngresada,this.precioIngresado,this.stockIngresado,this.paisSeleccionado,this.esComestible)
    
      let productoAAgregar = 
      {
        codigo : producto.codigo,
        comestible : producto.comestible,
        descripcion : producto.descripcion,
        paisDeOrigen : producto.paisDeOrigen,
        precio : producto.precio,
        stock : producto.stock
      }
    
      const respuesta = await this.firestore.agregarDato('Productos',productoAAgregar);
      console.log(respuesta);
      this.logeoExitoso = true;
    }
    else
    {
      this.errorMessage = "Error al agregar el producto"
    }
    
  }

  procesarPaisSeleccionado(pais: any) {
    this.paisSeleccionado = pais.name.common;
    // Aquí puedes realizar las acciones que necesites con el país seleccionado
    console.log('País seleccionado:', pais);
  }

  redirigirHome()
  {
    this.router.navigateByUrl('bienvenida')
  }
}
