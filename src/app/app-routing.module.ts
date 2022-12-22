import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'spa', loadChildren: () => import('./spa/spa.module').then(m => m.SpaModule) },
  { path: 'toh', loadChildren: () => import('./toh/toh.module').then(m => m.TohModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
