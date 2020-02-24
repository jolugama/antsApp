import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ItemsListComponent } from '@shared/components/list-items/list-items.component';
import { ItemSelectedComponent } from '@shared/components/item-selected/item-selected.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: ItemsListComponent, data: { title: 'Ants' } },
  { path: ':id', component: ItemSelectedComponent, data: { title: 'Ants Selected' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AntsRoutingModule { }
