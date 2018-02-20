import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { IUser } from '../user.interface';

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService, private router: Router) {

  }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl = '';

  // login(userName: string, password: string): Observable<IUser[]> {
  //   return this.userService.getUser(userName, password);
  // }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

}
