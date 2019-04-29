import { UsersService } from './users/services/user.service';
import { DayService } from './day/services/day.service';
import { AuthGuard } from './_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { Routes, RouterModule } from '@angular/router';
import { ProjetsService } from './projets/services/projet.service';
import { ClientsService } from './clients/services/clients.service';
import { DayComponent } from './day/day-list/day.component';
import { TimesheetProjetComponent } from './day/timesheet-projet/timesheet-projet.component';



const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients',
        loadChildren: './clients/clients.module#ClientsModule'
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'projets',
        loadChildren: './projets/projets.module#ProjetsModule'
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      }
    ]
  },
  { path: 'days', component: DayComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  // {path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: 'registers', component: RegisterComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    TimesheetProjetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService, AlertifyService, AuthGuard, ProjetsService, ClientsService, UsersService,DayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
