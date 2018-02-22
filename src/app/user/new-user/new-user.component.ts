import { IUser } from './../../user.interface';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;
  location: [{}];
  interests: [string];
  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      companyEmail: new FormControl(),
      passwordGroup: new FormGroup({
        password: new FormControl(),
        passwordConfirmation: new FormControl(),
      }, this.validatePassword),
      area: new FormControl(),
      phone: new FormControl(),
      description: new FormControl(),
      Vegetables: new FormControl(),
      Movies: new FormControl(),
      Music: new FormControl(),
      Sports: new FormControl(),
      Food: new FormControl(),
      Coffee: new FormControl(),
      location: new FormControl()
    });
    this.initLocation();
    this.initInterests();
  }

  initLocation() {
    this.location = [
      { value: 0, description: 'Yuxi' },
      { value: 1, description: 'Outside' },
      { value: 2, description: 'Both' },
    ];
  }

  initInterests() {
    this.interests = ['Vegetables', 'Movies', 'Music', 'Sports', 'Food', 'Coffee'];
  }

  validatePassword(control: AbstractControl) {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
    if (password.value === passwordConfirmation.value) {
      control.setErrors(null);
    } else {
      return { validPassword: true };
    }
  }

  register() {
    if (this.myForm.valid) {
      const newUser: IUser = this.getFormData();
      console.log(newUser);
      this.userService.createUser(newUser).subscribe(
        (user: IUser) => {
          this.authService.isLoggedIn = true;
          this.userService.setUser(user, true);
          this.router.navigateByUrl('home');
        },
        (error) => {
          console.log(error);
        });
    }
  }

  getFormData(): IUser {
      const newUser: IUser = {
        id: null,
        available: true,
        firstName: this.myForm.get('firstName').value,
        lastName: this.myForm.get('lastName').value,
        email: this.myForm.get('companyEmail').value,
        password: this.myForm.get('passwordGroup').get('password').value,
        area: this.myForm.get('area').value,
        phone: this.myForm.get('phone').value,
        interests: this.getSelectedInterests(),
        description: this.myForm.get('description').value,
        location: this.myForm.get('location').value,
        currentMatch: null,
        matches: [{
          id: null,
          date: null,
          rate: null,
          cancelMessage: null,
          cancelMessageToHHRR: null
        }]
      };
      return newUser;
  }

  getSelectedInterests(): string[] {
    const selectedInterests: string[] = [];
    this.interests.map(interest => {
      const interestValue = this.myForm.get(interest).value;
      if (interestValue === true) {
        selectedInterests.push(interest);
      }
    });
    return selectedInterests;
  }
}
