import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.css']
})
export class ClientComponent implements OnInit {

  Clients: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.http.get('http://localhost:5000/api/clients').subscribe(response => {
      this.Clients = response;
    }, error => {
      console.log(error);
    });
  }
}
