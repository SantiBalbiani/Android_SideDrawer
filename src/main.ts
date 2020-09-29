import { registerElement } from "nativescript-angular/element-registry";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
/* import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh); */
import { AppModule } from "./app/app.module";
/* import { PullToRefresh } from "@nstudio/nativescript-pulltorefresh"; */
registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh); 
platformNativeScriptDynamic().bootstrapModule(AppModule);
