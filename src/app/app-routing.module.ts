import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { PAGES } from './app.module';

const routes: Routes = [
  // { path: '', redirectTo: 'encyclopedia', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'ants', loadChildren: () => import('./ants/ants.module').then(m => m.AntsModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
