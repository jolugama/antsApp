import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store'; // opcional
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // opcional: instalar plugin chrome.

// Environment
import { environment } from '@environments/environment';

import { ROOT_REDUCERS, metaReducers } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx APP*** Store App',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
  ]
})
export class ReduxModule { }
