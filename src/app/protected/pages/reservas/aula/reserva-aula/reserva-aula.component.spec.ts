import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAulaComponent } from './reserva-aula.component';

describe('ReservaAulaComponent', () => {
  let component: ReservaAulaComponent;
  let fixture: ComponentFixture<ReservaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
