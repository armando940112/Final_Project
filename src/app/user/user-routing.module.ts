import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';

const userRoutes: Routes = [
  { path: 'signup', component: NewUserComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
