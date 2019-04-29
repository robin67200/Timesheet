import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any;

  constructor(private service: ClientsService) {}

  ngOnInit() {
    this.service.getClients().subscribe(
      response => {
        this.clients = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
