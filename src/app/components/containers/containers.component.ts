import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit{
seleccionarContenedor(_t40: any) 
{
  this.containerSeleccionado = _t40
}
  constructor(private router : Router, private firestore : FirestoreService){}
  

  listaContainers : any[] = []
  containerSeleccionado : any;

  borrarContainer()
  {
    this.firestore.eliminarDato('Containers', this.containerSeleccionado);
  }

  

  ngOnInit() 
  {
    this.firestore.traerDatos('Containers').subscribe(containers =>
    {
      this.listaContainers = containers;
    })
  }

  redirigirHome()
  {
    this.router.navigateByUrl('bienvenida')
  }

  crearContainerEvent(container : any)
  {

  }

}
