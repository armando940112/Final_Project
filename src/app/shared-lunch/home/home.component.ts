import { AuthenticationService } from './../../authentication/authentication.service';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  currentUser: IUser;
  currentUserImage: string;
  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser(true);
    this.currentUserImage = this.userService.getUserImage(true);
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
