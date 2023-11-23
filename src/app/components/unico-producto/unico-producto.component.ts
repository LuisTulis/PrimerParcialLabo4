import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unico-producto',
  templateUrl: './unico-producto.component.html',
  styleUrls: ['./unico-producto.component.css']
})
export class UnicoProductoComponent {
  @Input() productoSeleccionado: any;
}
