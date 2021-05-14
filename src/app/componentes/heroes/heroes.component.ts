import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public info:Heroe[]=[];
  constructor(private heroes:HeroesService) { }

  ngOnInit() {
    this.info=this.heroes.getHeroes();
  }

}
