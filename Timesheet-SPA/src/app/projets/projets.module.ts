
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjetsService } from './services/projet.service';
import { ProjetCreateComponent } from './projet-create/projet-create.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { ProjetEditComponent } from './projet-edit/projet-edit.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ProjetsRoutingModule } from './projets.routing';
import { ClientsModule } from '../clients/clients.module';
import { ModalsComponent } from './modals/modals.component';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ProjetsRoutingModule,
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
    ProjetCreateComponent,
    ProjetDetailComponent,
    ProjetEditComponent,
    ProjetListComponent,
    ModalsComponent
  ],
  providers: [ProjetsService, SimpleModalService], entryComponents: [ModalsComponent]
})
export class ProjetsModule {}
