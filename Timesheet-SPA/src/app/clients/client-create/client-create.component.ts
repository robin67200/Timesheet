import { TimeSheetsService } from './../../services/timeSheets.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  createClient: FormGroup;

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: TimeSheetsService
  ) {
    this.createClient = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }

  ngOnInit() {}

  send() {
    this.service.postClient(this.createClient).subscribe(res => {
      this.router.navigate(['/clients']);
    });
  }
}
