import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarberiaPerfilComponent } from './barberia/barberia-perfil/barberia-perfil.component';
import { BarberiaEditarAgregarComponent } from './barberia/barberia-editar-agregar/barberia-editar-agregar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MasajesEditarAgregarComponent } from './masajes/masajes-editar-agregar/masajes-editar-agregar.component';
import { MasajesPerfilComponent } from './masajes/masajes-perfil/masajes-perfil.component';
import { MenuBarberiaComponent } from './menus/menu-barberia/menu-barberia.component';
import { MenuMasajesComponent } from './menus/menu-masajes/menu-masajes.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    BarberiaPerfilComponent,
    BarberiaEditarAgregarComponent,
    FormularioComponent,
    MasajesEditarAgregarComponent,
    MasajesPerfilComponent,
    MenuBarberiaComponent,
    MenuMasajesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
