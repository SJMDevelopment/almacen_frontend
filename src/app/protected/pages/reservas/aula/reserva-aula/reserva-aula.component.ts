import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-aula',
  templateUrl: './reserva-aula.component.html',
  styleUrls: ['./reserva-aula.component.scss']
})
export class ReservaAulaComponent {


  aulas = [
    '',
    '1-103',
    '1-109',
    '2-205',
    '2-206',
    '5-105',
    '6-305',
    '6-204',
    '6-315',  
  ]

}
