import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Projet } from '../models/projet';
import { ProjetsService } from '../services/projet.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalsComponent } from '../modals/modals.component';
@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {

  id: number;
  projet: Projet = new Projet('Mrs', 'App', 0, 0);


  constructor(route: ActivatedRoute,
              private service: ProjetsService,
              private router: Router,
              public modals: SimpleModalService
              ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getProjetById(this.id).subscribe(res => {
      this.projet = res;
      // const currentCode = codes.find(c => c.OP_CODE === this.societe.operationCode);
    });
  }


  deleteProjet() {
    this.modals
      .addModal(ModalsComponent, {
        title: 'Suppression du projet',
        message: 'Etes-vous sûr de cette suppression ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteProjetById(this.id).subscribe(res => {
            this.router.navigate(['/projets/list']);
          });
        }
      });
    }


  
}
