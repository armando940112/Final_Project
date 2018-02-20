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
  matchedUserImage: string;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('entró al MATCH');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserImage = 'https://api.adorable.io/avatars/400/@adorable.io.png';
    this.matchedUserImage = 'https://api.adorable.io/avatars/400/2@adorable.io.png';
  }

  cancelLunch() {
    alert('Canceling lunch');
  }

  rateLunch() {
    this.router.navigateByUrl('home/rate');
  }

}
