import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { ProductosService } from "~/app/domain/productos.service";
import { PageRoute } from "nativescript-angular/router";
/* import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh); */
/* import {PullToRefresh} from '@nstudio/nativescript-pulltorefresh'; */
/* import { RadListView, ListViewEventData, PullToRefreshStyle } from "nativescript-ui-listview"; */
import { Color } from "tns-core-modules/color";
import { EventData } from "tns-core-modules/data/observable";

import { PullToRefresh } from '@nstudio/nativescript-pulltorefresh';

@Component({
    selector: "ProductDetail",
    templateUrl: "./productdetail.component.html"
})
export class ProductDetail implements OnInit {

    private id:String = '';
    private aProduct;
    private pruebaTest = [{id: "1", opinion: "Muy buen producto!", usuario:"Juan Perez", puntaje:"60"},{id: "2", opinion: "Muy mal producto!", usuario:"Juana Perez", puntaje:"45"},{id: "1", opinion: "buen producto!", usuario:"Juan Perez", puntaje:"50"}]
    
    constructor(private router: Router, private route: ActivatedRoute, private productos: ProductosService) {
        // Use the component constructor to inject providers.
        this.route.params.subscribe(param => this.id = param.id);
        this.aProduct = productos.buscar().filter( prod => prod.id === this.id.toString())[0];
        
    }

    ngOnInit(): void {
        // Init your component properties here..
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

     refreshList(args) {
        const pullRefresh = args.object;
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000); 
   }

    //Not used
    getDetail(){
        return this.pruebaTest;
    }
}