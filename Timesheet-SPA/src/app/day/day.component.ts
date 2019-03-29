import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  critere: any;
  search: FormGroup;
  days: any;
  users: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.search = fb.group(
      {
        name: ['', Validators.required],
        month: ['', Validators.required]
      }
    );
  }

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
  select() {
    this.critere = this.search.value;
    console.warn(this.critere);
    this.http.get('http://localhost:5000/api/days/' + this.critere.name + '/' + this.critere.month ).subscribe(
      response => {
        this.days = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
