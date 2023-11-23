import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent 
{
  constructor(private api : ApiService, private router : Router){}
  productoSeleccionado : any;
  pais : any;
  mostrarPais = false;
  

  public procesarProductoSeleccionado(producto: any) 
  {
    this.productoSeleccionado = producto;
    this.api.getACountry(this.productoSeleccionado.paisDeOrigen).subscribe((data : any)=>
    {
      console.log(data);
      this.pais=data[0]
      this.mostrarPais = true;
    })
    // Aquí puedes realizar las acciones que necesites con el país seleccionado
    console.log('producto seleccionado:', producto);
  }


  redirigirHome()
  {
    this.router.navigateByUrl('bienvenida')
  }
}
