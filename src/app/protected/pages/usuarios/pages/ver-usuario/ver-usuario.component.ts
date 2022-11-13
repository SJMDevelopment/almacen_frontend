import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.scss']
})
export class VerUsuarioComponent {

  usuario = {
    tipo_identificacion:  'CC',
    identificacion: 10010046,
    nombre: 'David',
    apellido: 'Torres Gomez',
    correo: 'example@udea.edu.co' ,
    ocupacion: 'Estudiante',
    facultad: 'FING',
    departamento: 'Sistemas'
  }


}
