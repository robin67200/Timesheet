import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.css']
})
export class ClientSelectComponent implements OnInit {

@Input() form: FormGroup;
  clients: Client[] = [];
  constructor(private service: ClientsService) { }

  ngOnInit() {
    this.service.getClients().subscribe(res => {
      this.clients = res;
    });
  }

}
