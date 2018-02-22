import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AppCommonModule } from './../app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule, AppCommonModule, AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class AuthenticationModule { }
