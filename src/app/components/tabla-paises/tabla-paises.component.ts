import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit 
{
  data : any[] = []
  filtroNombre : string = "";
  paisSeleccionado : any;
  @Output() paisSeleccionadoEvent = new EventEmitter<any>();

  constructor(private api : ApiService){}

  ngOnInit() : void
  {
    this.llenarData();
  }

  llenarData()
  {
    this.api.getData().subscribe(datos => {
      
      for(let i = 0; i< datos.length ; i++)
      {
        if(datos[i].continents[0] == 'Oceania')
        {
          this.data.push(datos[i]);
        }
      }
      console.log(this.data);
    })
  }

  filtrarPaises() {
    return this.data.filter(pais => {
      return pais.name.common.toLowerCase().includes(this.filtroNombre.toLowerCase());
    });
  }

  seleccionarPais(pais: any) {
    this.paisSeleccionado = pais;
    this.paisSeleccionadoEvent.emit(pais);
  }
}