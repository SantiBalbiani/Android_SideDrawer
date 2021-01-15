import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SettingsComponent } from "./settings.component";
import { EditUser } from "./edituser/edituser.component";


const routes: Routes = [
    { path: "", component: SettingsComponent,
    children: [       
        {
            path: 'edituser',
            component: EditUser,
            outlet:"sub" 
        },
    ], redirectTo: '', pathMatch: 'full'
    
          },
          { path: "edituser", component: EditUser }   
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
