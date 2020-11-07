import { Injectable } from "@angular/core";
/* import { Producto } from "./producto"; */

@Injectable()
export class ProductosService {
    private productos: Array<{name: String, detail: String, id: String}> = [];

    agregar(product: {name: String, detail: String, id: String}){
        this.productos.push(product);
    }

    quitar(nombreProducto: String){
        this.productos.filter( producto => producto.name != nombreProducto);
        console.log(this.productos);
    }

    buscar(){
        return this.productos;
    }
}