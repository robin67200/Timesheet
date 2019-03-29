import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
   {path: 'clients', component: ClientComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      ClientComponent
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
