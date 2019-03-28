import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetClients();
  }

  GetClients() {
    this.http.get('http://localhost:5000/api/clients').subscribe(response => {
      this.clients = response;
    }, error => {
      console.log(error);
    });
    }
  }

