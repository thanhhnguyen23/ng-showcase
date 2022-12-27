import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TohRoutingModule } from './toh-routing.module';
import { TohComponent } from './toh.component';
import { RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    TohComponent,
    CrisisCenterComponent,
    SuperheroesComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TohRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class TohModule { }
