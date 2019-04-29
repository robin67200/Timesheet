import { ClientsService } from './../services/clients.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Client } from '../models/client';
import { SimpleModalService } from 'ngx-simple-modal';
import { ClientModalsComponent } from '../client-modals/client-modals.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  id: number;
  client: Client = new Client('Mrs.', 'Street', '+33', '@');

  constructor(private http: HttpClient,
              route: ActivatedRoute,
              private router: Router,
              private service: ClientsService,
              public modals: SimpleModalService 
              ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getClientById(this.id).subscribe(res => {
      this.client = res;
    });
  }

  deleteClient() {
    this.modals
    .addModal(ClientModalsComponent, {
      title: 'Delete Client',
      message: 'Are you sure ?'
    })
    .subscribe(result => {
      if (result) {
        this.service.deleteClientById(this.id).subscribe(res => {
          this.router.navigate(['/clients/list']);
        });
      }
    });
  }
}
