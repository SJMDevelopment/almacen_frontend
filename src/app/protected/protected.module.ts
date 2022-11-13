import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';


import { HomeComponent } from './pages/home/home.component';
import { VerUsuarioComponent } from './pages/usuarios/pages/ver-usuario/ver-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/pages/editar-usuario/editar-usuario.component';
import { EditarContrasenaComponent } from './pages/usuarios/pages/editar-contrasena/editar-contrasena.component';
import { ReservaAulaComponent } from './pages/reservas/aula/reserva-aula/reserva-aula.component';
import { EditarReservaAulaComponent } from './pages/reservas/aula/editar-reserva-aula/editar-reserva-aula.component';
import { VerReservaAulaComponent } from './pages/reservas/aula/ver-reserva-aula/ver-reserva-aula.component';
import { ReservaActivoComponent } from './pages/reservas/activo/reserva-activo/reserva-activo.component';
import { EditarReservaActivoComponent } from './pages/reservas/activo/editar-reserva-activo/editar-reserva-activo.component';
import { VerReservaActivoComponent } from './pages/reservas/activo/ver-reserva-activo/ver-reserva-activo.component';
import { VerReservasComponent } from './pages/tablas/ver-reservas/ver-reservas.component';



@NgModule({
  declarations: [
    HomeComponent,
    VerUsuarioComponent,
    EditarUsuarioComponent,
    EditarContrasenaComponent,
    ReservaAulaComponent,
    EditarReservaAulaComponent,
    VerReservaAulaComponent,
    ReservaActivoComponent,
    EditarReservaActivoComponent,
    VerReservaActivoComponent,
    VerReservasComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  exports: [
  ]
})
export class ProtectedModule { }
