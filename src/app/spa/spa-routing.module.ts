import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { FirstComponent } from './first/first.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { SpaComponent } from './spa.component';

const routes: Routes = [
  { path: '', component: SpaComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'first', component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent }
    ]
  },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaRoutingModule { }
