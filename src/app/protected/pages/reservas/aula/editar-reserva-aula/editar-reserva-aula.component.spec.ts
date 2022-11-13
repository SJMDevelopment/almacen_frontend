import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaAulaComponent } from './editar-reserva-aula.component';

describe('EditarReservaAulaComponent', () => {
  let component: EditarReservaAulaComponent;
  let fixture: ComponentFixture<EditarReservaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarReservaAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarReservaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
