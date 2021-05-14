import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public heroes:Heroe[]=[];

  constructor(private heroesservice:HeroesService,private parametros:ActivatedRoute) { }

  ngOnInit() {
    this.parametros.params.subscribe(params=>{
    //console.log(params['buscar']);
      this.heroes=this.heroesservice.buscarHeroes(params['buscar']);
      console.log(this.heroes);
    })
  }
}
