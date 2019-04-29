import { ProjetsService } from './../../projets/services/projet.service';
import { UsersService } from './../../users/services/user.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Projet } from 'src/app/projets/models/projet';
import { DayService } from '../services/day.service';
import { Month } from '../model/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.componenttest.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  critere: any;
  search: FormGroup;
  days: any;
  users: any;
  date: Date;
  firstDay: number;
  projets: Projet[] = [];
  projet: any;

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private service: DayService,
    private userService: UsersService,
    private projetService: ProjetsService
  ) {
    this.search = fb.group({
      name: ['', Validators.required],
      month: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.projetService.getProjets().subscribe(res => {
      this.projet = res;
    });
    this.userService.getUsers().subscribe(
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
    this.daySearch();
  }

  changeMonth(i: number) {
    var date = new Date(this.critere.month);
    var month = date.getMonth() + i;
    const year = date.getFullYear();
    if (month <= 9) {
      this.critere.month = year.toString() + '-0' + month.toString();
    } else {
      this.critere.month = year.toString() + '-' + month.toString();
    }
    this.daySearch();
    this.search.patchValue(this.critere);
  }

  daySearch() {
    this.service.getDaysByCritere(this.critere).subscribe(
      response => {
        this.days = response;
        this.projetService.getProjets().subscribe(res => {
          this.projets = res;
          this.projets.forEach(x => {
            x.days = new Month(
              this.critere.month,
              this.critere.name,
              x.id,
              this.days
            ).day;
          });
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
