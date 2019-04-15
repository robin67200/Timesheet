import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TimeSheetsService } from 'src/app/services/timeSheets.service';

@Component({
  selector: 'app-projet-create',
  templateUrl: './projet-create.component.html',
  styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {

  createProjet: FormGroup;
  clients: any;

  constructor(
    private service: TimeSheetsService,
    fb: FormBuilder,
    private router: Router
  ) {
    this.createProjet = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      clientId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.service.getClients().subscribe(res => {
      this.clients = res;
    });
  }

  send() {
    this.service.postClient(this.createProjet).subscribe(res => {
      this.router.navigate(['/clients']);
    });
  }
}
