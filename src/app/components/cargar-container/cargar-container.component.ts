import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.css']
})
export class CargarContainerComponent implements OnInit
{
  redirigirHome() 
  {
    this.router.navigateByUrl('bienvenida');
  }

  constructor(private firestore : FirestoreService, private toast : ToastService, private router : Router){}

  listaContainers : any[] = [];
  containerSeleccionado : any;
  productoSeleccionado : any;
  cantidadSeleccionada : number = 0;

  ngOnInit() 
  {
    this.firestore.traerDatos('Containers').subscribe(containers =>
    {
      this.listaContainers = containers;
    })
  }

  seleccionarContenedor(contenedor : any)
  {
    this.containerSeleccionado = contenedor;
    console.log(contenedor);
  }
  
  cargarProducto()
  {
    if(this.cantidadSeleccionada > 0)
    {
      if(this.cantidadSeleccionada <= this.productoSeleccionado.stock)
      {
        if(this.cantidadSeleccionada <= this.containerSeleccionado.capacidad)
        {
          let listaProductos = [];
          this.firestore.traerDato('Containers','codigo',this.containerSeleccionado.codigo).subscribe((datos : any) =>
          {
            listaProductos = datos.productos
          })
  
          listaProductos.push(this.productoSeleccionado.descripcion + ' | ' + this.cantidadSeleccionada)
  
          let dataContainer  = { 
            productos : listaProductos,
            capacidad : this.containerSeleccionado.capacidad-this.cantidadSeleccionada
          }
  
          this.firestore.updateDocument(this.containerSeleccionado.id,dataContainer,'Containers')
          this.firestore.updateDocument(this.productoSeleccionado.id,{stock : this.productoSeleccionado.stock-this.cantidadSeleccionada},'Productos')
          this.toast.showSuccess('','¡Producto cargado con exito!')
        }
        else
        {
          this.toast.showError('Error', 'La cantidad seleccionada supera la capacidad del container.');
        }
      }
      else
      {
        this.toast.showError('Error','La cantidad seleccionada supera el stock disponible.');
      }
    }
    else
    {
      this.toast.showError('Error', 'La cantidad debe de ser mayor a 0')
    }
   
  }

  public procesarProductoSeleccionado(producto: any) 
  {
    this.productoSeleccionado = producto;
    
    console.log('producto seleccionado:', producto);
  }
}
