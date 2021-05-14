import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { DetalleHeroeComponent } from './componentes/detalle-heroe/detalle-heroe.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NuevoHeroeComponent } from './componentes/nuevo-heroe/nuevo-heroe.component';


const routes: Routes = [
  {path:`home`, component: HomeComponent},
  {path:`about`, component: AboutComponent},
  {path:`heroes`, component: HeroesComponent},
  {path:`detalle/:id`, component: DetalleHeroeComponent},
  {path:`busqueda/:buscar`, component: BusquedaComponent},
  {path:`heroe-nuevo`, component: NuevoHeroeComponent},
  {path: `**`,pathMatch:`full`,redirectTo:`home`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
