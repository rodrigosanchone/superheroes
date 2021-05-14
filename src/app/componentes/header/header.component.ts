import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  msg="Bienvenido"

  public buscarHeroes(buscar:string){
    this.rutas.navigate(['/busqueda',buscar]);

  }

  constructor(private rutas:Router) { }

  ngOnInit() {
  }

}
