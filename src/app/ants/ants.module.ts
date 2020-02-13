import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntsRoutingModule } from './ants-routing.module';
import { AntsComponent } from './ants.component';


@NgModule({
  declarations: [AntsComponent],
  imports: [
    CommonModule,
    AntsRoutingModule
  ]
})
export class AntsModule { }
