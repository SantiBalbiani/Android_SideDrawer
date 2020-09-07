import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/components/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/components/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/components/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/components/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "aboutme", loadChildren: () => import("~/app/components/aboutme/aboutme.module").then((m) => m.AboutMeModule) },
   /*  { path: "moredetails", loadChildren: () => import("~/app/components/moredetails/moredetails.module").then((m)=>m.MoreDetailsModule) }, */
    { path: "settings", loadChildren: () => import("~/app/components/settings/settings.module").then((m) => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
