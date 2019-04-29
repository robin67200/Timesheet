import { Client } from './../models/client';
import { ClientsService } from './../services/clients.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  createClient: FormGroup;
  hasError = false;
  errorMessage: string;

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: ClientsService
  ) {
    this.createClient = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }

  ngOnInit() {}

  Save() {
    if (this.createClient.valid) {
      const newClient = new Client('Mrs.', 'Street', '+33', '@');
      newClient.name = this.createClient.value.name;
      newClient.mail = this.createClient.value.mail;
      newClient.residence = this.createClient.value.residence;
      newClient.phone = this.createClient.value.phone;
      this.service.postClient(newClient).subscribe(res => {
        this.router.navigate(['/clients']);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir TOUS les champs';
    }
  }
}
