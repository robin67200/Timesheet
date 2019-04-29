
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projet } from 'src/app/projets/models/projet';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-timesheet-projet',
  templateUrl: './timesheet-projet.component.html',
  styleUrls: ['./timesheet-projet.component.css']
})
export class TimesheetProjetComponent implements OnInit {
  @Input() projet: Projet;
  firstDay: number;
  time: any[] = [];
  timePost: any[] = [];

  timesheet: FormGroup;
  constructor(fb: FormBuilder,private service: DayService) {
    this.timesheet = fb.group({
      1: ['', Validators.required],
      2: ['', Validators.required],
      3: ['', Validators.required],
      4: ['', Validators.required],
      5: ['', Validators.required],
      6: ['', Validators.required],
      7: ['', Validators.required],
      8: ['', Validators.required],
      9: ['', Validators.required],
      10: ['', Validators.required],
      11: ['', Validators.required],
      12: ['', Validators.required],
      13: ['', Validators.required],
      14: ['', Validators.required],
      15: ['', Validators.required],
      16: ['', Validators.required],
      17: ['', Validators.required],
      18: ['', Validators.required],
      19: ['', Validators.required],
      20: ['', Validators.required],
      21: ['', Validators.required],
      22: ['', Validators.required],
      23: ['', Validators.required],
      24: ['', Validators.required],
      25: ['', Validators.required],
      26: ['', Validators.required],
      27: ['', Validators.required],
      28: ['', Validators.required],
      29: ['', Validators.required],
      30: ['', Validators.required],
      31: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.firstDay = this.projet.days[0].date.getDay();
    this.time.push(0);
    this.projet.days.forEach((x) => {
      this.time.push(x.timeSpent);
    });
    while (this.time.length !== 32) {
      this.time.push(0);
    }
    this.timesheet.patchValue(this.time);
  }

  submit() {
    for (let index = 1; index < 32; index++) {
    var i = this.timesheet.controls[index].value;
    this.timePost.push(i);
    }
    this.projet.days.forEach((x) => {
      x.timeSpent = this.timePost.shift();
    });
    this.service.putDays(this.projet.days).subscribe();
  }
}
