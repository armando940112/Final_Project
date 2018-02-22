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
    this.currentUser = this.userService.getUser(true);
    this.currentUserImage = this.userService.getUserImage(true);
    this.userService.getAllUsers().subscribe(
      users => console.log(users)
    );
  }

  changeStatus() {
    this.currentUser.available = !this.currentUser.available;
    this.userService.put(this.currentUser).subscribe((x) => {
      this.userService.setUser(this.currentUser, true);
    },
    (error: any) => console.log(error));
  }

  match() {
    this.userService.getAllUsers().subscribe(users => {
      const filteredUsers = users.filter(user =>
        user.id !== this.currentUser.id && user.available === true && user.currentMatch === null
      );

      this.matchedUser = filteredUsers[
        Math.floor(Math.random() * filteredUsers.length)
      ];

      this.currentUser.currentMatch = this.matchedUser.id;
      this.matchedUser.currentMatch = this.currentUser.id;

      this.userService.put(this.currentUser).subscribe((x) => {
        this.userService.setUser(this.currentUser, true);
        this.userService.put(this.matchedUser).subscribe(() => {
          this.router.navigateByUrl('home/match');
        });
      });
    });

  }
}
