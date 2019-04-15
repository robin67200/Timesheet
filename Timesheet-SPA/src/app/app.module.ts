import { AuthGuard } from './_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DayComponent } from './day/day.component';
import { ProjetComponent } from './projet/projet.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { TestComponent } from './test/test.component';



const appRoutes: Routes = [
   {path: 'clients', component: ClientComponent, canActivate: [AuthGuard]},
   {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
   {path: 'days', component: DayComponent, canActivate: [AuthGuard]},
   {path: 'projets', component: ProjetComponent, canActivate: [AuthGuard]},
   {path: 'clients/create', component: CreateClientComponent, canActivate: [AuthGuard]},
   {path: 'projets/create', component: CreateProjetComponent, canActivate: [AuthGuard]},
   {path: 'home', component: HomeComponent},
   //{path: '**', redirectTo: 'home', pathMatch: 'full'},
   {path: 'registers', component: RegisterComponent},
   {path: 'users/create', component: RegisterComponent},
   {path: 'tests', component: TestComponent}

];

@NgModule({
   declarations: [
      AppComponent,
      ClientComponent,
      UserComponent,
      DayComponent,
      ProjetComponent,
      CreateClientComponent,
      CreateProjetComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CreateUserComponent,
      TestComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
