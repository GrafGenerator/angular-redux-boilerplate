import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";

import { 
    NgReduxModule,
    NgRedux,
    DevToolsExtension 
} from "@angular-redux/store";

import {
    IAppState,
    rootReducer,
    middleware,
    enhancers,
    reimmutify
  } from "./store";

import { UserAccount } from "./modules/user-account";
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
  ],
  declarations: [
    UserAccount,
  ],
  bootstrap: [ UserAccount ]
})
export class AppModule {
    constructor(
        private _ngRedux: NgRedux<IAppState>,
        private _devTools: DevToolsExtension
    ) {
        const tools = _devTools.enhancer({
            deserializeState: reimmutify,
        });

        _ngRedux.configureStore(
            rootReducer, 
            {}, 
            middleware,
            tools ? [ ...enhancers, tools ] : enhancers
        );
    }
}
