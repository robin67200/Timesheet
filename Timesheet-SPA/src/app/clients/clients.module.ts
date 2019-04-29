import { ClientModalsComponent } from './client-modals/client-modals.component';
import { ClientListComponent } from './client-list/Client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientsRoutingModule } from './clients.routing';
import { NgModule } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientSelectComponent } from './components/client-select/client-select.component';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ClientsRoutingModule,
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
    ClientCreateComponent,
    ClientDetailComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientSelectComponent,
    ClientModalsComponent,
    ],
  providers: [ClientsService, SimpleModalService],
  entryComponents: [ClientModalsComponent],
  exports: [ ClientSelectComponent ]
})
export class ClientsModule {}
