import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  currentUser: IUser;
  currentUserImage: string;
  matchedUser: IUser;
  matchedUserImage: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.initCurrentUser();
    this.initMatchedUser();
  }

  initCurrentUser() {
    this.currentUser = this.userService.getUser(true);
    this.currentUserImage = this.userService.getUserImage(true);
  }

  initMatchedUser() {
    this.userService.get(this.currentUser.currentMatch)
      .subscribe(user => {
        this.matchedUser = user[0];
        this.userService.setUser(this.matchedUser, false);
        this.matchedUserImage = this.userService.getUserImage(false);
      });
  }

  cancelLunch() {
    this.router.navigateByUrl('home/message');
  }

  rateLunch() {
    this.router.navigateByUrl('home/rate');
  }

}
