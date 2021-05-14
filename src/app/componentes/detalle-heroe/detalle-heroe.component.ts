import { Component, OnInit } from '@angular/core';
import { Route} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { HeroesService,Heroe } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {
  public heroe:Heroe;
  constructor(private heroes_service:HeroesService,
              private parametros:ActivatedRoute) {
               this.parametros.params.subscribe(params=>{
                //console.log(params['i']);
                this.heroe=this.heroes_service.getHeroe(params['id']);
                console.log(this.heroe);
              })
            }

  ngOnInit() {
  }
  ver_heroe(id:number){

  }

}
