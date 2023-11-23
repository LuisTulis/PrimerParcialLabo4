import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit
{

  listaProductos : any[] = [];
  productoSeleccionado : any;
  @Output() productoSeleccionadoEvent = new EventEmitter<any>();

  constructor(private firestore : FirestoreService){}


  ngOnInit(): void 
  {
    this.firestore.traerDatos('Productos').subscribe(datos =>
    {
      this.listaProductos = datos;
      console.log(datos);
    })
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
    this.productoSeleccionadoEvent.emit(producto);
  }

  

}
