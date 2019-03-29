import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetProjets();
  }

  GetProjets() {
    this.http.get('http://localhost:5000/api/projets').subscribe(response => {
      this.projets = response;
    }, error => {
      console.log(error);
    });
}
}
