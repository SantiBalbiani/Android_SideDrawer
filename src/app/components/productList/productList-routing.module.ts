import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { ProductList } from "./productList.component";
import { ProductDetail } from "../productdetail/productdetail.component";

const routes: Routes = [ 
     
    { path: "", 
    component: ProductList,
    
     children: [       
        {
            path: 'productdetail',
            component: ProductDetail,
            outlet:"sub" 
        },
    ], redirectTo: '', pathMatch: 'full'
    
          },
          { path: "productdetail", component: ProductDetail }   
  /*   ,
    { path: "/moredetails", component: MoreDetailsComponent }  */
    /* ,{path: '', redirectTo: '/aboutme', pathMatch: 'full'} */
];




@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule] 
})
export class ProductListRoutingModule { }

