import { TimeSheetsService } from 'src/app/services/timeSheets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {
  projets: any;
  clients: any;

  constructor(private service: TimeSheetsService) {}

  ngOnInit() {
    this.GetProjets();
  }

  GetProjets() {
    this.service.getProjets().subscribe(
      response => {
        this.projets = response;
        this.service.getClients().subscribe(res => {
          this.clients = res;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
