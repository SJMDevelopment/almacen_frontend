import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { UsuariosRoutingModule } from './usuarios-routing.module';

//component
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { EditarContrasenaComponent } from './pages/editar-contrasena/editar-contrasena.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
