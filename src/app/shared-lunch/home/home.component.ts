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
  //constructor(private router: Router, private route: ActivatedRoute) {
  currentUser: IUser;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) {
    // console.log(this.userService.loggedUser);
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Entro al home');

  }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
