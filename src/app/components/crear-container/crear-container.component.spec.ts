import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContainerComponent } from './crear-container.component';

describe('CrearContainerComponent', () => {
  let component: CrearContainerComponent;
  let fixture: ComponentFixture<CrearContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearContainerComponent]
    });
    fixture = TestBed.createComponent(CrearContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
