import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/classes/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-publico-producto',
  templateUrl: './listado-publico-producto.component.html',
  styleUrls: ['./listado-publico-producto.component.css']
})
export class ListadoPublicoProductoComponent 
{
  productoSeleccionado : Producto;
  productos : any;

  constructor( private firestore : FirestoreService, private router: Router){
    this.productoSeleccionado = new Producto("","",0,0,"", false);
  }

  async ngOnInit(): Promise<void> {
    this.firestore.traerDatosQM('Productos','stock', 0).subscribe(datos =>
      {
        this.productos = datos;
        console.log(this.productos);
      });
  }
  
  @Output() productoSeleccionadoEvent = new EventEmitter<any>();

  // Método para emitir el actor seleccionado
    emitirProductoSeleccionado(producto: any) {
    this.productoSeleccionado = producto;
    this.productoSeleccionadoEvent.emit(producto);
  }

  redirigirHome()
  {
    this.router.navigateByUrl('bienvenida')
  }
}
