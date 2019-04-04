import { TimeSheetsService } from './../../services/timeSheets.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id: number;
  editClient: FormGroup;

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: TimeSheetsService
  ) {
    this.editClient = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required]
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getClientsByid(this.id).subscribe(res => {
      this.editClient.patchValue(res);
    });
  }

  edit() {
      this.service.putClient(this.id, this.editClient.value).subscribe(res => {
        this.router.navigate(['/clients/detail/' + this.id]);
      });
  }
}
