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
import { ItemPageComponent } from './components/organisms/item-page/item-page.component';
import { DescriptionPageComponent } from './components/organisms/description-page/description-page.component';

// componentes dinámicos
import { AntsItemComponent } from './components/ants/ants-item/ants-item.component';


import { RouterModule } from '@angular/router';












const DYNAMIC_PAGES = [
  AntsItemComponent,
];

const GENERIC_PAGES = [
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
    ...DYNAMIC_PAGES,
    ...GENERIC_PAGES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ...DYNAMIC_PAGES,
    ...GENERIC_PAGES,
    ...COMPONENTS,
    RouterModule
  ]

})
export class SharedModule { }
