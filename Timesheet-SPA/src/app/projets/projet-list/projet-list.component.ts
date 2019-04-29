import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projet.service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {
  projets: any;
  clients: any;

  constructor(private service: ProjetsService) {}

  ngOnInit() {
    this.service.getProjets().subscribe(
      response => {
        this.projets = response;
      }
    )
  }

  GetProjets() {
    this.service.getProjets().subscribe(
      response => {
        this.projets = response;
        /*this.service.getClients().subscribe(res => {
          this.clients = res;
        });*/
      },
      error => {
        console.log(error);
      }
    );
  }
}
