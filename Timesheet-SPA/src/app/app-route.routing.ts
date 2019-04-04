import { ProjetDetailComponent } from './projets/projet-detail/projet-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientListComponent } from './clients/client-list/Client-list.component';
import { DayComponent } from './day/day.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ProjetCreateComponent } from './projets/projet-create/projet-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'days', component: DayComponent},
  {path: 'clients', component: ClientListComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'clients/detail/:id', component: ClientDetailComponent},
  {path: 'clients/edit/:id', component: ClientEditComponent},
  {path: 'projets', component: ProjetListComponent},
  {path: 'projet/create', component: ProjetCreateComponent},
  {path: 'projet/detail/:id', component: ProjetDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
