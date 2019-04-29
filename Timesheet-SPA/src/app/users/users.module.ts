import { UserModalsComponent } from './user-modals/user-modals.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsModule } from '../clients/clients.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersRoutingModule } from './users.routing';
import { UsersService } from './services/user.service';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            UsersRoutingModule,
            ClientsModule,
            SimpleModalModule.forRoot(
              { container: 'modal-container' },
              {
                closeOnEscape: false,
                closeOnClickOutside: false,
                bodyClass: 'modal-open',
                wrapperDefaultClasses: 'modal fade-anim',
                wrapperClass: 'in',
                animationDuration: 300
              }
            )],
  declarations: [
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserModalsComponent
  ],
  providers: [UsersService, SimpleModalService], entryComponents: [UserModalsComponent]
})
export class UsersModule {}
