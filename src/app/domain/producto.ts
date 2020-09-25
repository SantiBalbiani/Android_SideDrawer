import { Injectable } from "@angular/core";

export class Producto{
private name: String;
private description: String;
private price: Number;

constructor( nombre: String, descr: String, precio: Number ){
    this.name = nombre;
    this.description = descr;
    this.price = precio;
}

getName(): String{
    return this.name
}

getDescription(): String{
    return this.description
}

getPrice(): Number{
    return this.price
}

}