import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css']
})
export class DetallesPaisComponent {
  @Input() pais : any;

}
