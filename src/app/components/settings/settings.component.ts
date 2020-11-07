import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    
    // Función para simular el tiempo de procesamiento de los alert, toast y action.
    doLater(fn){ setTimeout(fn, 1000)};

    ngOnInit(): void {

/*    1  Agrega, en la lista avanzada, comportamiento que informe con un “alert” que se ha ejecutado la acción seleccionada (por ejemplo, si agregas un botón de eliminación, debe aparecer un mensaje que diga “se eliminó el elemento”).
      2  Agrega, en la lista avanzada, un nuevo ícono o botón que muestre un diálogo de tipo “action” para ingreso de información (por ejemplo, para seleccionar categoría de un elemento).
      3  Agrega un “toast” que notifique la edición correcta de un elemento al cambiar el atributo editado con el “action”. */


        // Basic example of Altert, Action
        this.doLater( () =>{
            dialogs.action("mensaje", "cancelar!", ["Opcion1", "Opcion2"])
            .then((result) => {
                console.log("resultado: " + result);
                if (result == "Opcion1"){
                    this.doLater(()=>
                    dialogs.alert({
                        title: "Titulo 1",
                        message: "mje 1",
                        okButtonText: "Okay Button"
                    }).then(()=>console.log("cerrado 1!"))
                    )
                }else if (result == "Opcion2"){
                    this.doLater(()=>
                    dialogs.alert({
                        title: "Titulo 2",
                        message: "mje 2",
                        okButtonText: "Okay Button"
                    }).then(()=>console.log("cerrado 2!"))
                    )
                }
            })
        })

        // Ejemplo Toast: Ventanas que figuran durante unos segundos
        const toastOptions: Toast.ToastOptions = {text: "Hello Mundo", duration: Toast.DURATION.SHORT};
        this.doLater(() => Toast.show(toastOptions));

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
