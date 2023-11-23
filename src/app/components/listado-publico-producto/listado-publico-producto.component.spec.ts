import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPublicoProductoComponent } from './listado-publico-producto.component';

describe('ListadoPublicoProductoComponent', () => {
  let component: ListadoPublicoProductoComponent;
  let fixture: ComponentFixture<ListadoPublicoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPublicoProductoComponent]
    });
    fixture = TestBed.createComponent(ListadoPublicoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
