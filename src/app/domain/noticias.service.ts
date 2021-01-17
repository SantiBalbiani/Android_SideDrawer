import { Injectable } from "@angular/core";
import {getJSON, request} from "tns-core-modules/http";
const sqlite = require("nativescript-sqlite");

@Injectable()
export class NoticiasService {
    
      //Noticias hardcodeadas - viejo
      //private noticias: Array<String> = [];
    api: string = " https://46d90dd67cf3.ngrok.io/";


    constructor(){
        this.getDb( (db) => {
            console.dir(db);
            db.each( "select * from logs",
            (err, fila) => console.log("fila: ", fila),
            (err, totales) => console.log("filas totales: ", totales));
        }, () => console.log("error on getDB"));
    }

    getDb(fnOk, fnError){
        return new sqlite("mi_db_logs", (err, db) => {
            if(err){
                console.log("error al abrir db. ", err);
            }else{
                console.log("está abierta la db", db.isOpen() ? "Si" : "No");
                db.execSQL("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)").then((id) => {
                    console.log("Create Table ok");
                    fnOk(db);
                }), (error) => {
                    console.log("CREATE TABLE ERROR", error);
                    fnError(error);
                }
            }
        })
    }

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

        // Logueo la busqueda
        this.getDb((db) => {
            db.execSQL("insert into logs (texto) values (?)", [s],
            (err, id) => console.log("nuevo id: ", id))
        }, () => console.log("error on getDB"));

        // Busco en la api el texto ingresado por el usuario
        return getJSON(this.api + "get?q=" + s);
    }

}
