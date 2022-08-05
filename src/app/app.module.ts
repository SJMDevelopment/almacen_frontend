import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { TablasComponent } from './Shared/Components/tablas/tablas.component';
import { LoginComponent } from './Shared/pages/login/login.component';
import { RecuperarContrasenaComponent } from './Shared/pages/recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    TablasComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
