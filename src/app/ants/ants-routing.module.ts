import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './list-items/list-items.component';
import { ItemSelectedComponent } from './item-selected/item-selected.component';


const routes: Routes = [
  { path: '', component: ListItemsComponent, data: { title: 'Ants' } },
  { path: ':id', component: ItemSelectedComponent, data: { title: 'Ants Selected' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntsRoutingModule { }
