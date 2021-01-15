import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule} from "nativescript-angular/forms";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { EditUser } from "./edituser/edituser.component";
import { EditFormComponent } from "./edituser/edituser-form.component";
import { MinLenDirective } from "../search/validador";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SettingsComponent,
        EditFormComponent,
        EditUser,
        MinLenDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
