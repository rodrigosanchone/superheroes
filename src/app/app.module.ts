import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//RUTAS
import { AppRoutingModule } from './app-routing.module';
//SERVICIOS
import{ HeroesService } from './servicios/heroes.service';
//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleHeroeComponent } from './componentes/detalle-heroe/detalle-heroe.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NuevoHeroeComponent } from './componentes/nuevo-heroe/nuevo-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent,
    HomeComponent,
    DetalleHeroeComponent,
    BusquedaComponent,
    NuevoHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
