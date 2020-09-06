// import { NativeScriptConfig } from '@nativescript/core';
 import {NativeScriptModule} from "nativescript-angular/nativescript.module";
export default {
  id: 'org.nativescript.DrawerNavigation',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptModule;
