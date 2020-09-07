import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutMeRoutingModule } from "./aboutme-routing.module";
import { AboutMeComponent } from './aboutme.component';
import { MoreDetailsComponent } from '../moredetails/moredetails.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AboutMeRoutingModule,
    ],
    declarations: [
        AboutMeComponent,
        MoreDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutMeModule { }