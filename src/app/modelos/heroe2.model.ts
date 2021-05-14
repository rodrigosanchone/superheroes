import {Heroe} from '../servicios/heroes.service';
export class Heroe2 {
    public id:number;
    public nombre:string;
    public bio:string;
    public img:string;
    public aparicion:string;
    public casa:string;
    constructor(){
    }

    public covertirJSON=():Heroe=>{
        let data:Heroe={
            "id":this.id,
            "nombre":this.nombre,
            "bio":this.bio,
            "img":this.img,
            "aparicion":this.aparicion,
            "casa":this.casa
        }
        return data;
    }
}


