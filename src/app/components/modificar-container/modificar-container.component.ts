import { Component, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent {
  constructor(private firestore : FirestoreService){}
  @Input() containerSeleccionado: any;


  modificarContainer()
  {
    let newData = 
    {
      capacidad : this.containerSeleccionado.capacidad,
      color : this.containerSeleccionado.color,
      empresa : this.containerSeleccionado.empresa
    }
    
    this.firestore.updateDocument(this.containerSeleccionado.id,newData,'Containers')
  }
}
