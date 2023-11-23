import { Component, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-borrar-container',
  templateUrl: './borrar-container.component.html',
  styleUrls: ['./borrar-container.component.css']
})
export class BorrarContainerComponent {

  constructor(private firestore : FirestoreService){}
  @Input() containerSeleccionado: any;


  borrarContainer()
  {
    console.log('hola')
    this.firestore.eliminarDato('Containers',this.containerSeleccionado.id)
    this.containerSeleccionado = null
  }
}
