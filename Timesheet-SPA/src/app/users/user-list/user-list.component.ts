import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
    }
  }


