import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number;
  editUser: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
    route: ActivatedRoute,
    private service: UsersService
  ) {
    this.editUser = fb.group({
      name: ['', Validators.required],
      residence: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      statut: ['', Validators.required],
      salary: ['', Validators.required]
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }


  ngOnInit() {
    this.service.getUserById(this.id).subscribe(res => {
      this.editUser.patchValue(res);
    });
  }

  edit() {
    this.service.putUser(this.id, this.editUser.value).subscribe(res => {
      this.router.navigate(['/users/detail/' + this.id]);
    });
  }

}
