import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../_guards/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserModalsComponent } from './user-modals/user-modals.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'list',
		canActivate: [ AuthGuard ]
    },
    {path: 'create', component: UserCreateComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: UserDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
    {path: 'list', component: UserListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id/delete/:id', component: UserModalsComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule {}