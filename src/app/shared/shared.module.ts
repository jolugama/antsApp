import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { ItemsListComponent } from '@shared/components/list-items/list-items.component';
import { ItemSelectedComponent } from '@shared/components/item-selected/item-selected.component';
import { AdDirective } from '@shared/directives/ad.directive';

// componentes dinámicos
import { AntsListComponent } from '@ants/components/ants-list/ants-list.component';
import { AntsSelectedComponent } from '@ants/components/ants-selected/ants-selected.component';

@NgModule({
  declarations: [
    AdDirective,
    ItemsListComponent,
    ItemSelectedComponent,
    AntsListComponent,
    AntsSelectedComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ItemsListComponent,
    ItemSelectedComponent
  ]
})
export class SharedModule { }
