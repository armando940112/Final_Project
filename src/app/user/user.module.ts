import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';
import { AppCommonModule } from '../app-common.module';

@NgModule({
  imports: [
    CommonModule, AppCommonModule, UserRoutingModule
  ],
  declarations: [NewUserComponent],
  providers: []
})
export class UserModule { }
