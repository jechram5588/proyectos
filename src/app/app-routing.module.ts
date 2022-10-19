import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './usuarios/add-user/add-user.component';
import { EditUserComponent } from './usuarios/edit-user/edit-user.component';   
import { ListUserComponent } from './usuarios/list-user/list-user.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'add-user'},
  {path: 'add-user', component:AddUserComponent},
  {path: 'edit-user/:id', component:EditUserComponent},
  {path: 'list-user', component:ListUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
