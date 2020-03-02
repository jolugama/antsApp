import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '@shared/shared.module';



import { AntsItemPage } from './components/ants-item/ants.item.component';







const routes: Routes = [
  { path: '', component: AntsItemPage, data: { title: 'Ants' } },
  // { path: ':id', component: ItemSelectedComponent, data: { title: 'Ants Selected' } },
  // {
  //   path: 'item',
  //   loadChildren: () => import('./components/item/item.module').then( m => m.ItemPageModule)
  // },
  // {
  //   path: 'description',
  //   loadChildren: () => import('./components/description/description.module').then( m => m.DescriptionPageModule)
  // }
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
