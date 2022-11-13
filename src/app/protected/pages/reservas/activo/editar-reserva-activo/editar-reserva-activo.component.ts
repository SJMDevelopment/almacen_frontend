import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-reserva-activo',
  templateUrl: './editar-reserva-activo.component.html',
  styleUrls: ['./editar-reserva-activo.component.scss']
})
export class EditarReservaActivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: any[] = [];
  activos = [1];

  onUpload(event: Event, index: number) {
    const ELEMENT = event.target as HTMLInputElement;
    const FILE = ELEMENT.files?.item(0);
    if (FILE) {
      this.files.splice(index, 1, FILE);
    }
  }

  removeFile(index: number) {
    if (this.activos.length > 1) {
      this.activos.splice(index, 1);
    }
    this.files.splice(index, 1);
  }
}
