import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ItemsListComponent } from './components/list-items/list-items.component';
import { ItemSelectedComponent } from './components/item-selected/item-selected.component';


const routes: Routes = [
  { path: '', component: ItemsListComponent, data: { title: 'Ants' } },
  { path: ':id', component: ItemSelectedComponent, data: { title: 'Ants Selected' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntsRoutingModule { }
