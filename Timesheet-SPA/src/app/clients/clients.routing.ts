import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/Client-list.component';
import { ClientModalsComponent } from './client-modals/client-modals.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'list',
		canActivate: [ AuthGuard ]
    },
    {path: 'create', component: ClientCreateComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: ClientDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
		{path: 'list', component: ClientListComponent, canActivate: [AuthGuard]},
		{path: 'detail/:id/delete/:id', component: ClientModalsComponent, canActivate: [AuthGuard]}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ClientsRoutingModule {}