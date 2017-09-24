import "reflect-metadata";
import "babel-polyfill";
import "core-js/es6";
import "core-js/es7/reflect";
import "../shims/shims_for_IE";
import "zone.js/dist/zone";
import "ts-helpers";

import { enableProdMode } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule }              from "./app.module";

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require("zone.js/dist/long-stack-trace-zone");
}

if (!__TEST__) {
    platformBrowserDynamic().bootstrapModule(AppModule);
}

// import "reflect-metadata";
// import "babel-polyfill";
// import "core-js/es6";
// import "core-js/es7/reflect";
// import "../shims/shims_for_IE";
// import "zone.js/dist/zone";
// import "ts-helpers";

// import { enableProdMode, provide } from "@angular/core";
// import { bootstrap } from "@angular/platform-browser-dynamic";
// import { APP_BASE_HREF } from "@angular/common";
// import { provideForms } from "@angular/forms";
// import { DevToolsExtension, NgRedux } from "@angular-redux/store";

// import { PartyService } from "./services/party";
// import { ACTION_PROVIDERS } from "./actions";
// import { HomePage } from "./pages/home.page";

// declare const __PRODUCTION__: boolean;
// declare const __TEST__: boolean;

// if (__PRODUCTION__) {
//   enableProdMode();
// } else {
//   require("zone.js/dist/long-stack-trace-zone");
// }

// if (!__TEST__) {
//   bootstrap(HomePage, [
//     provideForms(),
//     NgRedux,
//     DevToolsExtension,
//     ACTION_PROVIDERS,
//     PartyService,
//     provide(APP_BASE_HREF, { useValue: "/" })
//   ]);
// }
