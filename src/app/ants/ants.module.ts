import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { AntsRoutingModule } from './ants-routing.module';
import { AntsComponent } from './ants.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import * as fromAnts from './reducers';
import { FavoriteItemEffects, ItemEffects } from './effects';

@NgModule({
  declarations: [AntsComponent],
  imports: [
    CommonModule,
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
