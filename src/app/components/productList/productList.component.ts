import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ProductosService } from "~/app/domain/productos.service";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";

import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";
@Component({
    selector: "ProductList",
    moduleId: module.id,
    templateUrl: "./productList.component.html"

})
export class ProductList implements OnInit {

    constructor(private router: Router, private productos: ProductosService) {

    }


    ngOnInit(): void {
        // Init your component properties here.
        this.productos.agregar({name:"Producto 1", detail:"Detalle 1 del producto 1", id:"1"});
        this.productos.agregar({name:"Producto 2", detail:"algo 2", id:"2"});
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    navigateToDetails(id: String) {
/*         this.router.navigate([
          '/productlist/productdetail/' + id
        ]) */

        this.router.navigate([
             {outlets: {sub:["productdetail" ,id ] }}  
          ])
      }

    onItemTap(x): void {
     // Redireccionar
     this.router.navigate(['/productList/productdetail']);
    }

    doLater(fn){ setTimeout(fn, 1000)};


    eliminarProducto(nombreProducto){
        this.productos.quitar(nombreProducto);
        this.doLater(()=>
                    dialogs.alert({
                        title: "Confirmado",
                        message: "Se ha eliminado el producto " + nombreProducto,
                        okButtonText: "Okay"
                    }).then(()=>console.log("Producto Eliminado"))
                    )
    }
}