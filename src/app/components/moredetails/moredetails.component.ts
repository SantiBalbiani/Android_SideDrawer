import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";



/* import { getViewById } from "tns-core-modules/ui/core/view";
import { Label } from "tns-core-modules/ui/label";
import { View } from "tns-core-modules/ui/core/view"; */

import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";


@Component({
    selector: "MoreDetails",
    templateUrl: "./moredetails.component.html",
    styleUrls: ["./moredetails.css"]
})
export class MoreDetailsComponent implements OnInit{
    
   public message;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
        this.message = "test1";
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    onTap(args: EventData) {     
         let button = args.object as Button;
        /* let parent = button.parent; */     
                this.message = "Bienvenido a la sección de detalles.";               
                 if (button.android) {
                    this.message += " Estas usando Android";
                } 
            }
    }
      /*     if (parent) {
            let lbl = <Label>getViewById(parent, "cargarsaludo"); */