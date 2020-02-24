import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// solo necesario para ionic app.
import { IonicModule } from '@ionic/angular';


import { FormsModule } from '@angular/forms';

import { AntsRoutingModule } from './ants-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import * as fromAnts from './reducers';
import { FavoriteItemEffects, ItemEffects } from './effects';

import { AntsListComponent } from './components/list-ants/ants.component';
import { AntsSelectedComponent } from './components/ants-selected/ants-selected.component';
import { ItemsListComponent } from './components/list-items/list-items.component';
import { ItemSelectedComponent } from './components/item-selected/item-selected.component';




@NgModule({
  declarations: [
    AntsListComponent,
    AntsSelectedComponent,
    ItemsListComponent,
    ItemSelectedComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AntsRoutingModule,
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
  ]
})
export class AntsModule { }
