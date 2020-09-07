import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AboutMeComponent } from "./aboutme.component";
import { MoreDetailsComponent } from "../moredetails/moredetails.component";

const routes: Routes = [ 
    { path: "", component: AboutMeComponent },
    { path: "/moredetails", component: MoreDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule] 
})
export class AboutMeRoutingModule { }

