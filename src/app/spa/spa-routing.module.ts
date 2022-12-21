import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpaComponent } from './spa.component';

const routes: Routes = [
  { path: '', component: SpaComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule { }
