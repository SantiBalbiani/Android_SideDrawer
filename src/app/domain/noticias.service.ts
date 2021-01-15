import { Injectable } from "@angular/core";
import {getJSON, request} from "tns-core-modules/http";
@Injectable()
export class NoticiasService {
    
      //Noticias hardcodeadas - viejo
      //private noticias: Array<String> = [];
    api: string = "https://671aa0e849d7.ngrok.io/";

    agregar(s: string){
        return request({
            url: this.api + "get",
            method: "POST",
            headers: {"content-type": "application/json"},
            content: JSON.stringify({
                nuevo: s
            })
        })

        //Noticias hardcodeadas - viejo
        //this.noticias.push(s);
    }

    favs(){
        return getJSON(this.api + "get?q=")
    }


    buscar(s: string){
        return getJSON(this.api + "get?q=" + s);
    }
}
