import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../_guards/auth.guard';
import { ProjetCreateComponent } from './projet-create/projet-create.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { ProjetEditComponent } from './projet-edit/projet-edit.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ModalsComponent } from './modals/modals.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'list',
		canActivate: [ AuthGuard ]
    },
    {path: 'create', component: ProjetCreateComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: ProjetDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: ProjetEditComponent, canActivate: [AuthGuard]},
    {path: 'list', component: ProjetListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id/delete/:id', component: ModalsComponent, canActivate: [AuthGuard]},

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ProjetsRoutingModule {}