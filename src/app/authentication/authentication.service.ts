import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { IUser } from '../user.interface';

@Injectable()
export class AuthenticationService {
  isLoggedIn = false;
  constructor(private userService: UserService, private router: Router) {
  }

  //This was the initial method to log in but because of the web memory API I had to bring all users and then find the user in that list
  // login(userName: string, password: string): Observable<IUser[]> {
  //   return this.userService.getUser(userName, password);
  // }

  logout(): void {
    this.isLoggedIn = false;
    this.userService.clearUser(true);
    this.userService.clearUser(false);
  }

}
