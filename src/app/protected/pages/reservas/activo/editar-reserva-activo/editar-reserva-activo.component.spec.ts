import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaActivoComponent } from './editar-reserva-activo.component';

describe('EditarReservaActivoComponent', () => {
  let component: EditarReservaActivoComponent;
  let fixture: ComponentFixture<EditarReservaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarReservaActivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarReservaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
