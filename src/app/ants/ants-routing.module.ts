import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntsComponent } from './ants.component';

const routes: Routes = [{ path: '', component: AntsComponent, data: { title: 'Ants' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntsRoutingModule { }
