import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BarberiaPerfilComponent } from './barberia/barberia-perfil/barberia-perfil.component';
import { BarberiaEditarAgregarComponent } from './barberia/barberia-editar-agregar/barberia-editar-agregar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MasajesEditarAgregarComponent } from './masajes/masajes-editar-agregar/masajes-editar-agregar.component';
import { MasajesPerfilComponent } from './masajes/masajes-perfil/masajes-perfil.component';
import { MenuBarberiaComponent } from './menus/menu-barberia/menu-barberia.component';
import { MenuMasajesComponent } from './menus/menu-masajes/menu-masajes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  /* FORMULARIO */
  { path: 'formulario2', component: FormularioComponent },
  /* BARBERIA */
  { path: 'perfilBarbero', component: BarberiaPerfilComponent },
  { path: 'agregarEditar', component: BarberiaEditarAgregarComponent },
  /* MASAJES */
  { path: 'agregarEditarMasajes', component: MasajesEditarAgregarComponent },
  { path: 'perfilMasajes', component: MasajesPerfilComponent },
  /* MENUS */
  { path: 'menuBarberia', component: MenuBarberiaComponent },
  { path: 'menuMasajes', component: MenuMasajesComponent },

  /* RUTA DE EMERGENCIA */
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
