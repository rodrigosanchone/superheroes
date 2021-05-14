import { Component, OnInit } from '@angular/core';
import {Heroe2} from '../../modelos/heroe2.model';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent implements OnInit {
  public data:Heroe2;
  public mensaje:string="";
  public mostrarmsg:boolean=false;
  private heroeservice: HeroesService;
  constructor( ) {
    this.data=new Heroe2();
    this.heroeservice=new HeroesService();
    }
    
    public guardar=()=>{
      this.mensaje="Heroe Guardado!!";
      this.mostrarmsg=true;
      this.heroeservice.guardarHeroe(this.data.covertirJSON());
      /*console.log(this.data.id);
      console.log(this.data.nombre);
      console.log(this.data.bio);
      console.log(this.data.img);
      console.log(this.data.aparicion);
      console.log(this.data.casa);*/
    }
    public buscar=()=>{
      let res=this.heroeservice.buscarHeroe(this.data.id);
      if(res!=null){
        this.mensaje="Información Mostrada!!";
        this.data.nombre=res.nombre;
        this.data.bio=res.bio;
        this.data.aparicion=res.aparicion;
        this.data.img=res.img;
        this.data.casa=res.casa;
      }else{
        this.mensaje="Heroe No encontrado!!";
      }
      
      this.mostrarmsg=true;
    }
    public eliminar=()=>{
      this.heroeservice.EliminarHeroe(this.data.id);
      this.mensaje="Heroe Eliminado!!";
      this.mostrarmsg=true;
    }
    public modificar=()=>{
       this.heroeservice.modificarHeroe(this.data.covertirJSON());
      this.mensaje="Heroe Actualizado!!";
      this.mostrarmsg=true;
    }
  
  ngOnInit() {
    console.log("hola");
  };
  
 
}

