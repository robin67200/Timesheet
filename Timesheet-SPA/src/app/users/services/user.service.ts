import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}
      getUsers() {
        return this.http.get<User>('http://localhost:5000/api/users');
      }
      getUserById(id: number) {
        return this.http.get<User>('http://localhost:5000/api/users/' + id);
      }
      putUser(id: number, user: any) {
        return this.http.put<User>('http://localhost:5000/api/users/' + id, user);
      }
      postUser(user: User) {
        return this.http.post<User>('http://localhost:5000/api/users', user);
      }
      deleteUserById(id: number) {
        return this.http.delete<User>('http://localhost:5000/api/users/' + id);
      }

}