import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-reserva-aula',
  templateUrl: './editar-reserva-aula.component.html',
  styleUrls: ['./editar-reserva-aula.component.scss']
})
export class EditarReservaAulaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aulas = [
    '',
    '6-305',
    '6-204',
    '5-105',
    '1-103',
    '6-315',  
  ]
}
