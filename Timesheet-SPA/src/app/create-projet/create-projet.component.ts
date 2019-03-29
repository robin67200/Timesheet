import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit {

  clients: any;
  createProjet: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.createProjet = fb.group(
      {
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', Validators.required],
        clientId: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.GetClients();
  }

  PostProjet() {
    this.http.post('http://localhost:5000/api/projets', this.createProjet.value).subscribe(res => {
      this.router.navigate(['/projets']);
    });
  }

  GetClients() {
    this.http.get('http://localhost:5000/api/clients').subscribe(response => {
      this.clients = response;
    }, error => {
      console.log(error);
    });
    }
}
