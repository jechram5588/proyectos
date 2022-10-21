import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*  --  Componentes --  */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './usuarios/add-user/add-user.component';
import { EditUserComponent } from './usuarios/edit-user/edit-user.component';
import { ListUserComponent } from './usuarios/list-user/list-user.component';
import { DashboardMainComponent } from './dashboards/dashboard-main/dashboard-main.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    DashboardMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
