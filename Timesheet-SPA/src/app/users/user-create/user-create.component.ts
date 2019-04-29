import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  createUser: FormGroup;
  hasError = false;
  errorMessage: string;

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: UsersService
  ) { 
    this.createUser = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      statut: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit() {}

  Save() {
    if (this.createUser.valid) {
      const newUser = new User();
      newUser.name = this.createUser.value.name;
      newUser.residence = this.createUser.value.residence;
      newUser.phone = this.createUser.value.phone;
      newUser.mail = this.createUser.value.mail;
      newUser.statut = this.createUser.value.statut;
      newUser.salary = this.createUser.value.salary;
      this.service.postUser(newUser).subscribe(res =>{
        this.router.navigate(['/users']);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir TOUS les champs';
    }
  }

}
