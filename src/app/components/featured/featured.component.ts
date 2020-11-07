import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { GestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onLongPress(args: GestureEventData){
        const grid = <GridLayout>args.object;
        grid.rotate=0;
        grid.animate({
            rotate:360,
            duration:2000
        })
    }
}
