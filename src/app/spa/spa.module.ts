import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './spa.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildAComponent } from './child-a/child-a.component';


@NgModule({
  declarations: [
    SpaComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    FirstComponent,
    SecondComponent,
    ChildBComponent,
    ChildAComponent
  ],
  imports: [
    CommonModule,
    SpaRoutingModule
  ]
})
export class SpaModule { }
