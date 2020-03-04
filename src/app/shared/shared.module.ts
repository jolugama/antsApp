import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';



import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ItemComponent } from './components/item/item.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { PictureCarouselComponent } from './components/picture-carousel/picture-carousel.component';

// pages
import { ItemOrganismComponent } from './components/organisms/item-organism/item-organism.component';
import { DescriptionOrganismComponent } from './components/organisms/description-organism/description-organism.component';

// componentes dinámicos
import { AntsItemComponent } from './components/ants/ants-item/ants-item.component';
import { AntsDescriptionComponent } from './components/ants/ants-description/ants-description.component';


import { RouterModule } from '@angular/router';














const DYNAMIC_PAGES = [
  AntsItemComponent,
  AntsDescriptionComponent
];

const ORGANISM_PAGES = [
  ItemOrganismComponent,
  DescriptionOrganismComponent,
];

const COMPONENTS = [
  FilterBoxComponent,
  ItemComponent,
  ItemBoxComponent,
  MenuComponent,
  SearcherComponent,
  PictureCarouselComponent
];


@NgModule({
  declarations: [
    ...DYNAMIC_PAGES,
    ...ORGANISM_PAGES,
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
    ...ORGANISM_PAGES,
    ...COMPONENTS,
    RouterModule
  ]

})
export class SharedModule { }
