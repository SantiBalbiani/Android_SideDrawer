import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoticiasService } from "./domain/noticias.service";
import { ProductosService } from "./domain/productos.service";
import { MinLenDirective } from "./domain/validador";

// Redux State Mgmnt.
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule as NgRxStoreModule} from "@ngrx/store";
import {
    intializeNoticiasState,
    NoticiasEffects,
    NoticiasState,
    reducersNoticias
} from "./domain/noticias-state.model";
// End Redux State Mgmnt.

export interface AppState{
    noticias: NoticiasState;
}

const reducers: ActionReducerMap<AppState> = {
    noticias: reducersNoticias
};

const reducersInitialState = {
    noticias: intializeNoticiasState()
};




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState}),
        EffectsModule.forRoot([NoticiasEffects])
    ],
    providers: [NoticiasService, ProductosService, MinLenDirective],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
