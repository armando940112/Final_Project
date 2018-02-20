import { IUser } from './../../user.interface';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {
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
      interest: new FormControl(),
      location: new FormControl()
    });
  }

  validatePassword(control: AbstractControl) {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
    console.log(control);
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
        (x) => {
          console.log(x);
          this.router.navigateByUrl('home');
        },
        (error) => {
          console.log(error);
        });
    }
  }

  getFormData(): IUser {
      const companyEmail: string = this.myForm.get('companyEmail').value;
      const interests = ['Vegetables', 'Movies'];
      const newUser: IUser = {
        id: null,
        available: true,
        firstName: this.myForm.get('firstName').value,
        lastName: this.myForm.get('lastName').value,
        email: companyEmail,
        password: this.myForm.get('passwordGroup').get('password').value,
        area: this.myForm.get('area').value,
        phone: this.myForm.get('phone').value,
        interests: interests,
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
}
