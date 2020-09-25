import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "~/app/domain/noticias.service";
import { ProductosService } from "~/app/domain/productos.service";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";

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
        this.productos.agregar("test1");
        this.productos.agregar("test2");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
     // Redireccionar
     this.router.navigate(['/productList/productdetail']);
    }
}