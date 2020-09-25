import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";



import { ProductListRoutingModule } from "./productList-routing.module";
import { ProductList} from "./productList.component";
import { ProductDetail } from "../productdetail/productdetail.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProductListRoutingModule,
    ],
    declarations: [
        ProductList,
        ProductDetail
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductListModule { }