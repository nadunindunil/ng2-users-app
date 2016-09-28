import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'groups', component: GroupComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2TestRoutingModule { }
