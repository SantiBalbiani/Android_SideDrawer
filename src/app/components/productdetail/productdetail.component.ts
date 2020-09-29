import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { ProductosService } from "~/app/domain/productos.service";
import { PageRoute } from "nativescript-angular/router";

@Component({
    selector: "ProductDetail",
    templateUrl: "./productdetail.component.html"
})
export class ProductDetail implements OnInit {

    private id:String = '';
    private aProduct;
    
    constructor(private router: Router, private route: ActivatedRoute, private productos: ProductosService) {
        // Use the component constructor to inject providers.
        this.route.params.subscribe(param => this.id = param.id);
        this.aProduct = productos.buscar().filter( prod => prod.id === this.id.toString())[0];
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    //Not used
    getDetail(){
        return this.aProduct.detail;
    }
}