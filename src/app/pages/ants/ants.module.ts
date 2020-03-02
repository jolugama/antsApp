import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';


// solo necesario para ionic app.
import { IonicModule } from '@ionic/angular';


import { FormsModule } from '@angular/forms';

import { AntsRoutingModule } from './ants-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import * as fromAnts from './reducers';
import { FavoriteItemEffects, ItemEffects } from './effects';

// import { AntsListComponent } from './components/ants-list/ants-list.component';
// import { AntsSelectedComponent } from './components/ants-selected/ants-selected.component';

// import { LoaderService } from '@pages/ants/services/loader/loader.service';

import { SharedModule } from '@shared/shared.module';


import { AntsItemComponent } from './components/ants-item/ants.item.component';
import { AntsDescriptionComponent } from './components/ants-description/ants-description.component';



@NgModule({
  declarations: [
    AntsItemComponent,
    AntsDescriptionComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AntsRoutingModule,
    SharedModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromAnts.itemsFeatureKey, fromAnts.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([FavoriteItemEffects, ItemEffects]),
  ],
  // providers: [
  //   LoaderService,
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: (service: LoaderService) => {
  //       return () => service.loadItems().then();
  //     },
  //     deps: [],
  //     multi: true
  //   }]
})
export class AntsModule { }
