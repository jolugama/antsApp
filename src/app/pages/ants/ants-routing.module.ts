import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '@shared/shared.module';

import { ItemsListComponent } from '@shared/components/list-items/list-items.component';
import { ItemSelectedComponent } from '@shared/components/item-selected/item-selected.component';

import { ItemPageComponent } from '@shared/components/item-page/item-page.component';
import { DescriptionPageComponent } from '@shared/components/description-page/description-page.component';

const routes: Routes = [
  { path: '', component: ItemPageComponent, data: { title: 'Ants' } },
  { path: 'x', component: ItemsListComponent, data: { title: 'Ants' } },
  { path: ':id', component: ItemSelectedComponent, data: { title: 'Ants Selected' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AntsRoutingModule { }
