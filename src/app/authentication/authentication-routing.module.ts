import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';

const loginRoutes: Routes = [
  { path: '', component: AuthenticationComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthenticationRoutingModule { }
