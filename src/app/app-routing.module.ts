import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { BindComponent } from './bind/bind.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'binding', component: BindComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: '', component: HomeComponent },
  // ,
  { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
