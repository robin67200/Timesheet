import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../services/user.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { UserModalsComponent } from '../user-modals/user-modals.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User = new User();

  constructor(route: ActivatedRoute,
              private service: UsersService,
              private router: Router,
              public modals: SimpleModalService
              ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }


  ngOnInit() {
    this.service.getUserById(this.id).subscribe(res => {
      this.user = res;
    });
  }

  deleteUser() {
    this.modals
      .addModal(UserModalsComponent, {
        title: 'Delete User',
        message: 'Are you sure ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteUserById(this.id).subscribe(res => {
            this.router.navigate(['/users/list']);
          });
        }
      });
  }

}
