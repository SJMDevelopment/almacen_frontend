import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservaActivoComponent } from './ver-reserva-activo.component';

describe('VerReservaActivoComponent', () => {
  let component: VerReservaActivoComponent;
  let fixture: ComponentFixture<VerReservaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReservaActivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerReservaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
