import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DayComponent } from './day/day.component';
import { ProjetComponent } from './projet/projet.component';


const appRoutes: Routes = [
   {path: 'clients', component: ClientComponent},
   {path: 'users', component: UserComponent},
   {path: 'days', component: DayComponent},
   {path: 'projets', component: ProjetComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      ClientComponent,
      UserComponent,
      DayComponent,
      ProjetComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
