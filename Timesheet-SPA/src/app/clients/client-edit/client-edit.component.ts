import { ClientsService } from './../services/clients.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  
  id: number;
  editClient: FormGroup;

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: ClientsService
  ) {
    this.editClient = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required]
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getClientById(this.id).subscribe(res => {
      this.editClient.patchValue(res);
    });
  }

  edit() {
    const newClient = new Client('Mrs.', 'Street', '+33', '@');
    newClient.mail = this.editClient.value.mail;
    newClient.residence = this.editClient.value.residence;
    newClient.phone = this.editClient.value.phone;
    newClient.mail = this.editClient.value.mail;
    newClient.name = this.editClient.value.name;
    this.service.putClient(this.id, newClient).subscribe(res => {
        this.router.navigate(['/clients/detail/' + this.id]);
      });
  }
}
