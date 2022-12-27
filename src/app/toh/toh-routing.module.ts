import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { LoginComponent } from './login/login.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { TohComponent } from './toh.component';

const tohRoutes: Routes = [
  { path: '', component: TohComponent,
    children: [
      { path: 'crisis-center', component: CrisisCenterComponent },
      { path: 'superheroes', component: SuperheroesComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(tohRoutes),
],
  exports: [RouterModule]
})
export class TohRoutingModule { }
