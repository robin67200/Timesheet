import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeSheetsService } from 'src/app/services/timeSheets.service';
@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any;

  constructor(private http: HttpClient, private service: TimeSheetsService) {}

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
