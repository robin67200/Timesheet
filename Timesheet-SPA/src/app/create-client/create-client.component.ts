import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  createClient: FormGroup;

  constructor(private http: HttpClient, fb: FormBuilder) {
    this.createClient = fb.group(
      {
        name: ['', Validators.required],
        residence: ['', Validators.required],
        phone: ['', Validators.required],
        mail: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  PostClient() {
    this.http.post('http://localhost:5000/api/clients', this.createClient.value).subscribe();
  }

}
