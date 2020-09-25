import { Injectable } from "@angular/core";
/* import { Producto } from "./producto"; */

@Injectable()
export class ProductosService {
    private productos: Array<String> = [];

    agregar(name: String){
        this.productos.push(name);
    }

    buscar(){
        return this.productos;
    }
}