import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

@Component({
    selector: "AboutMe",
    templateUrl: "./aboutme.component.html"
})
export class AboutMeComponent implements OnInit{
    
    constructor(private router: Router, private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

/*     onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            relativeTo: this.route,  
            transition: {
                name: "fade"
            }
        });} */

         onNavItemTap(navItemRoute: string): void {
            this.router.navigate(['/aboutme/moredetails']);

        } 
} 