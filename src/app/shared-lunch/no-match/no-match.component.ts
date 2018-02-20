import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-no-match',
  templateUrl: './no-match.component.html',
  styleUrls: ['./no-match.component.css']
})
export class NoMatchComponent implements OnInit {
  currentUser: IUser;
  matchedUser: IUser;
  allUsers: IUser[];
  currentUserImage: string;
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    console.log('entró al nomatch');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserImage = 'https://api.adorable.io/avatars/400/@adorable.io.png';
  }

  changeStatus() {
    this.currentUser.available = !this.currentUser.available;
    this.userService.put(this.currentUser).subscribe((x) => {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    },
    (error: any) => console.log(error));
  }

  match() {
    this.userService.getAllUsers().subscribe(users => {
      const filteredUsers = users.filter(user =>
        user.id !== this.currentUser.id && user.available === true && user.currentMatch === null
      );
      const filtedUsersWithLocation = filteredUsers.filter(user =>
        user.location === this.currentUser.location
      );

      const finalUsers = filtedUsersWithLocation.length > 0 ? filtedUsersWithLocation : filteredUsers;
      this.matchedUser = finalUsers[
        Math.floor(Math.random() * finalUsers.length)
      ];

      this.currentUser.currentMatch = this.matchedUser.id;
      this.matchedUser.currentMatch = this.currentUser.id;

      this.userService.put(this.currentUser).subscribe((x) => {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.userService.put(this.matchedUser).subscribe(() => this.router.navigateByUrl('home/match'));
      });
    });

  }
}
