import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { MapView, Marker, Position} from 'nativescript-google-maps-sdk';
/* registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView); */

registerElement('MapView', ()=> MapView);

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    @ViewChild("MapView",{static:false} ) mapView: ElementRef;

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

    onMapReady(event): void{
         console.log("Map Ready");

         let mapView = event.object as MapView;

         const c_latitude = -34.6037;
         const c_longitude = -58.3817;

         var marker = new Marker();

         marker.position = new Position();

         marker.position.latitude = c_latitude;
         marker.position.longitude = c_longitude;

         marker.title = "Bs As querido";
         marker.snippet = "Argentina";
         marker.userData = { index: 1};
         mapView.addMarker(marker);

    }
}
