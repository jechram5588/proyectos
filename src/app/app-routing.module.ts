import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainComponent } from './dashboards/dashboard-main/dashboard-main.component';

import { AddUserComponent } from './usuarios/add-user/add-user.component';
import { EditUserComponent } from './usuarios/edit-user/edit-user.component';   
import { ListUserComponent } from './usuarios/list-user/list-user.component';
import { LoginUserComponent } from './usuarios/login-user/login-user.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login-user'},

  {path: 'dashboard-main', component:DashboardMainComponent},

  {path: 'add-user', component:AddUserComponent},
  {path: 'list-user', component:ListUserComponent},
  {path: 'edit-user/:id', component:EditUserComponent},
  {path: 'login-user', component:LoginUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
