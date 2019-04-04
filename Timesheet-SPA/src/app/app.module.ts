import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { AppRoutingModule } from './app-route.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientListComponent } from './clients/client-list/Client-list.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ProjetCreateComponent } from './projets/projet-create/projet-create.component';
import { ProjetDetailComponent } from './projets/projet-detail/projet-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      UserListComponent,
      UserCreateComponent,
      UserDetailComponent,
      UserEditComponent,
      DayComponent,
      ProjetListComponent,
      ProjetCreateComponent,
      ProjetDetailComponent,
      ClientListComponent,
      ClientCreateComponent,
      ClientDetailComponent,
      ClientEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
