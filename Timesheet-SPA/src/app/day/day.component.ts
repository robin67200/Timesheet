import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  days: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetDays();
  }

  GetDays() {
    this.http.get('http://localhost:5000/api/days').subscribe(response => {
      this.days = response;
    }, error => {
      console.log(error);
    });
}
}
