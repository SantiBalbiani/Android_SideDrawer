import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "~/app/domain/noticias.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"

})
export class SearchComponent implements OnInit {
    resultados: Array<String>;


    constructor(private noticias: NoticiasService) {

    }

    ngOnInit(): void {
        // Init your component properties here.
        this.noticias.agregar('Noticia 1');
        this.noticias.agregar('Noticia 2');
        this.noticias.agregar('Noticia 3');
        this.noticias.agregar('Noticia 4');
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        this.noticias.agregar('Seleccionaste un itemmn');
    }

    buscarAhora(unTexto: string){
        this.resultados = this.noticias.buscar().filter( (x) => x.indexOf(unTexto) >= 0);
    }
}
