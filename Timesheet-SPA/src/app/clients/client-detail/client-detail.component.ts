import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TimeSheetsService } from 'src/app/services/timeSheets.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  id: number;
  client: any;

  constructor(private http: HttpClient, route: ActivatedRoute, private service: TimeSheetsService) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getClientsByid(this.id).subscribe(res => {
      this.client = res;
    });

  }
}
