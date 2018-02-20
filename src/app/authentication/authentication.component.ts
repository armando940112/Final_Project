import { AuthenticationService } from './authentication.service';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl()
  });
  currentUser: IUser;
  invalidLogin: boolean;

  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  register() {
    this.router.navigateByUrl('/signup');
  }

  logIn() {
    const email = this.myForm.get('email').value;
    const password = this.myForm.get('password').value;
    this.userService.getAllUsers()
      .subscribe((users) => {
        if (users.length > 0) {
          this.currentUser = users.find(user => user.email === email && user.password === password);
          if (this.currentUser) {
            this.authService.isLoggedIn = true;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.redirectToHome();
          } else {
            this.invalidLogin = true;
          }
        } else {
          this.invalidLogin = true;
        }
      }, (error) => {
        console.log(error);
      });
  }

  redirectToHome() {
    if (this.currentUser.currentMatch !== null) {
      this.router.navigateByUrl('home/match');
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  getErrorMessage() {
    return this.myForm.get('email').hasError('required') ? 'You must enter a value' :
    this.myForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

}
