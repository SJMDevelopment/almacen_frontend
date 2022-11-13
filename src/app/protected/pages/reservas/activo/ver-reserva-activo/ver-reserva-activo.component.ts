import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-reserva-activo',
  templateUrl: './ver-reserva-activo.component.html',
  styleUrls: ['./ver-reserva-activo.component.scss']
})
export class VerReservaActivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reserva = {
    nombre: 'David',
    apellidos: 'Torres Gomez',
    fechaCreacion: '10/8/2022',
    fechaReserva: '15/8/2022',
    horaInicio: '12:00',
    horaFin: '15:00',
    estadoActual: 'En espera',
    justificacion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit vitae tellus commodo vulputate. Fusce vel ante mollis, petro mi presidente auctor tortor eget, gravida erat. Vivamus ut felis urna.',
    aula: '6-305'
  };


}
