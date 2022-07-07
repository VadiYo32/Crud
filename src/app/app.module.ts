import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ActualizarUsuarioComponent } from './pages/crud/actualizar-usuario/actualizar-usuario.component';
import { RegistrarUsuarioComponent } from './pages/crud/registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudComponent,
    ActualizarUsuarioComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
