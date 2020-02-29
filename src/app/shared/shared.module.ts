import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';



import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ItemComponent } from './components/item/item.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearcherComponent } from './components/searcher/searcher.component';


// pages
import { ItemPageComponent } from './components/item-page/item-page.component';
import { DescriptionPageComponent } from './components/description-page/description-page.component';


import { ItemsListComponent } from '@shared/components/list-items/list-items.component';
import { ItemSelectedComponent } from '@shared/components/item-selected/item-selected.component';


// componentes dinámicos
import { AntsItemComponent } from './components/ants/ants-item/ants-item.component';
// import { AntsSelectedComponent } from '@pages/ants/components/ants-selected/ants-selected.component';
// import { AntsListComponent } from '@pages/ants/components/ants-list/ants-list.component';

import { RouterModule } from '@angular/router';










const DYNAMIC_COMPONENTS = [
  AntsItemComponent,

  ItemPageComponent,
  DescriptionPageComponent,
];

const COMPONENTS = [
  FilterBoxComponent,
  ItemComponent,
  ItemBoxComponent,
  MenuComponent,
  SearcherComponent
];


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemSelectedComponent,
    ...DYNAMIC_COMPONENTS,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ...DYNAMIC_COMPONENTS,
    ...COMPONENTS,
    ItemsListComponent,
    ItemSelectedComponent,
    RouterModule
  ]

})
export class SharedModule { }
