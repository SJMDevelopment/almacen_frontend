import { Component } from '@angular/core';
@Component({
  selector: 'app-reserva-activo',
  templateUrl: './reserva-activo.component.html',
  styleUrls: ['./reserva-activo.component.scss']
})
export class ReservaActivoComponent {

  constructor(
  ) { }

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
