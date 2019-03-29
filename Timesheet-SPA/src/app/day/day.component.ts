import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  days: any;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.GetDays();
    this.GetUsers();
  }

  GetDays() {
    this.http.get('http://localhost:5000/api/days').subscribe(
      response => {
        this.days = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  GetUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  select()
  {
  }
}
