import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AboutMeComponent } from "./aboutme.component";
import { MoreDetailsComponent } from "../moredetails/moredetails.component";

const routes: Routes = [ 
     
    { path: "", 
    component: AboutMeComponent,
    
     children: [       
        {
            path: 'moredetails',
            component: MoreDetailsComponent,
            outlet:"sub" 
        },
    ], redirectTo: '', pathMatch: 'full'
    
          },
          { path: "moredetails", component: MoreDetailsComponent }   
  /*   ,
    { path: "/moredetails", component: MoreDetailsComponent }  */
    /* ,{path: '', redirectTo: '/aboutme', pathMatch: 'full'} */
];




@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule] 
})
export class AboutMeRoutingModule { }

