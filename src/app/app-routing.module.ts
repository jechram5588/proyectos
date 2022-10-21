import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainComponent } from './dashboards/dashboard-main/dashboard-main.component';

import { AddUserComponent } from './usuarios/add-user/add-user.component';
import { EditUserComponent } from './usuarios/edit-user/edit-user.component';   
import { ListUserComponent } from './usuarios/list-user/list-user.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'dashboard-main'},

  {path: 'dashboard-main', component:DashboardMainComponent},

  {path: 'add-user', component:AddUserComponent},
  {path: 'list-user', component:ListUserComponent},
  {path: 'edit-user/:id', component:EditUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
