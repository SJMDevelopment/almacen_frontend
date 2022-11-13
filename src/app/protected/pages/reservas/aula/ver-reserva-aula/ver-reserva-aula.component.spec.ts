import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservaAulaComponent } from './ver-reserva-aula.component';

describe('VerReservaAulaComponent', () => {
  let component: VerReservaAulaComponent;
  let fixture: ComponentFixture<VerReservaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReservaAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerReservaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
