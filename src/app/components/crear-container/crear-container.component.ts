import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-crear-container',
  templateUrl: './crear-container.component.html',
  styleUrls: ['./crear-container.component.css']
})
export class CrearContainerComponent implements OnInit {

  constructor(private firestore : FirestoreService){}
  @Output() containerCreadoEvent = new EventEmitter<any>();

  capacidad : number = 0;
  codigo : string = "";
  color : string = "";
  empresa : string = "";

  ngOnInit(): void {
      
    let encontrado = true;
    while(encontrado)
    {
      console.log('hola');
      this.codigo = (Math.floor((Math.random() + 1)*100000)).toString();
      encontrado = false;
      this.firestore.traerDato('Containers','codigo',this.codigo).subscribe(datoEncontrado =>
      {
        if(datoEncontrado)
        {
          encontrado = true;
        } 
      })
    }
  }

  async crearContainer() 
  {
    console.log('ola');
    let container = new Container(this.capacidad, this.codigo, this.color, this.empresa);
    
    let dataToUpload = 
    {
      capacidad : this.capacidad,
      codigo : this.codigo,
      color : this.color,
      empresa : this.empresa,
      productos : [],
      id : 0
    }

    await this.firestore.agregarDato('Containers',dataToUpload)
    
    this.containerCreadoEvent.emit(container);
  }
}
