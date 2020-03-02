import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '@shared/shared.module';



import { AntsItemPageComponent } from './pages/ants-item-page/ants-item-page.component';
import { AntsDescriptionPageComponent } from './pages/ants-description-page/ants-description-page.component';
import { AntsFilterPageComponent } from './pages/ants-filter-page/ants-filter-page.component';






const routes: Routes = [
  {
    path: 'filter',
    component: AntsFilterPageComponent,
    data: { title: 'Ants Filter' }
  },
  {
    path: ':id',
    component: AntsDescriptionPageComponent,
    data: { title: 'Ants Description' }
  },
  {
    path: '',
    component: AntsItemPageComponent,
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
