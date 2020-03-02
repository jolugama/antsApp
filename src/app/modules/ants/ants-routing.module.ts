import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '@shared/shared.module';



import { AntsItemComponent } from './components/ants-item/ants.item.component';
import { AntsDescriptionComponent } from './components/ants-description/ants-description.component';
import { AntsFilterComponent } from './ants-filter/ants-filter.component';






const routes: Routes = [
  {
    path: 'filter',
    component: AntsFilterComponent,
    data: { title: 'Ants Filter' }
  },
  {
    path: ':id',
    component: AntsDescriptionComponent,
    data: { title: 'Ants Description' }
  },
  {
    path: '',
    component: AntsItemComponent,
    data: { title: 'Ants' }
  },
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
