import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoProductoComponent } from './unico-producto.component';

describe('UnicoProductoComponent', () => {
  let component: UnicoProductoComponent;
  let fixture: ComponentFixture<UnicoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnicoProductoComponent]
    });
    fixture = TestBed.createComponent(UnicoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
