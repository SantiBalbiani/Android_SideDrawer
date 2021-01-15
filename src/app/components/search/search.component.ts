import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "~/app/domain/noticias.service";
import {Color, View} from 'tns-core-modules/ui/core/view/view';
import * as Toast from 'nativescript-toasts';

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"

})
export class SearchComponent implements OnInit {
    resultados: Array<String>;
    @ViewChild("layout", {static:false}) layout: ElementRef;

    constructor(private noticias: NoticiasService) {

    }

    ngOnInit(): void {
        // Init your component properties here.
        // No hace falta hardcodear inicializaciones. Era para test
/*         this.noticias.agregar('Noticia 1');
        this.noticias.agregar('Noticia 2');
        this.noticias.agregar('Noticia 3');
        this.noticias.agregar('Noticia 4'); */
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        this.noticias.agregar('Seleccionaste un itemmn');
    }

    buscarAhora(unTexto: string){
        console.dir("buscar ahora" + unTexto);

        this.noticias.buscar(unTexto).then((result: any) => {
            console.log("resultado de busqueda: " + JSON.stringify(result));
            this.resultados = result;
        }, (errormsj) => {
            console.log("error: " + errormsj);
            Toast.show({text: "Error en la búsqueda", duration: Toast.DURATION.SHORT});
        })
    }

    // Buscar elementos hardcodeados - Viejo
/*     buscarAhora(unTexto: string){
        this.resultados = this.noticias.buscar().filter( (x) => x.indexOf(unTexto) >= 0);

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 300,
            delay: 150
        }).then(()=> layout.animate({
            backgroundColor: new Color("white"),
            duration:300,
            delay: 150
        }))
    } */
}
