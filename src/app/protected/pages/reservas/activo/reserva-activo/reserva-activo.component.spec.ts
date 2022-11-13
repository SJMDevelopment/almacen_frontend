import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaActivoComponent } from './reserva-activo.component';

describe('ReservaActivoComponent', () => {
  let component: ReservaActivoComponent;
  let fixture: ComponentFixture<ReservaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaActivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
