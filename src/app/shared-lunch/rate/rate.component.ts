import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  matchedUserImage: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.matchedUserImage = 'https://api.adorable.io/avatars/400/2@adorable.io.png';
  }

  finishMatch() {
    this.router.navigateByUrl('home');
  }

}
