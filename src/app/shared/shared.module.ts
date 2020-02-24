import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { ItemsListComponent } from '@shared/components/list-items/list-items.component';
import { ItemSelectedComponent } from '@shared/components/item-selected/item-selected.component';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemSelectedComponent
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
