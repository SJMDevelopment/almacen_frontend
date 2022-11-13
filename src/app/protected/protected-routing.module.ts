import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { EditarReservaActivoComponent } from './pages/reservas/activo/editar-reserva-activo/editar-reserva-activo.component';
import { ReservaActivoComponent } from './pages/reservas/activo/reserva-activo/reserva-activo.component';
import { VerReservaActivoComponent } from './pages/reservas/activo/ver-reserva-activo/ver-reserva-activo.component';
import { EditarReservaAulaComponent } from './pages/reservas/aula/editar-reserva-aula/editar-reserva-aula.component';
import { ReservaAulaComponent } from './pages/reservas/aula/reserva-aula/reserva-aula.component';
import { VerReservaAulaComponent } from './pages/reservas/aula/ver-reserva-aula/ver-reserva-aula.component';
import { VerReservasComponent } from './pages/tablas/ver-reservas/ver-reservas.component';
import { EditarContrasenaComponent } from './pages/usuarios/pages/editar-contrasena/editar-contrasena.component';
import { EditarUsuarioComponent } from './pages/usuarios/pages/editar-usuario/editar-usuario.component';
import { VerUsuarioComponent } from './pages/usuarios/pages/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'ver-usuario',
        component: VerUsuarioComponent
      },
      {
        path: 'editar-usuario',
        component: EditarUsuarioComponent
      },
      {
        path: 'editar-contrasena',
        component: EditarContrasenaComponent
      },
      {
        path: 'reserva-aula',
        component: ReservaAulaComponent
      },
      {
        path: 'ver-reserva-aula',
        component: VerReservaAulaComponent
      },
      {
        path: 'editar-reserva-aula',
        component: EditarReservaAulaComponent
      },
      {
        path: 'reserva-activo',
        component: ReservaActivoComponent
      },
      {
        path: 'ver-reserva-activo',
        component: VerReservaActivoComponent
      },
      {
        path: 'editar-reserva-activo',
        component: EditarReservaActivoComponent
      },
      {
        path: 'ver-reservas',
        component: VerReservasComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
