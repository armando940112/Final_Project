import { NewUserComponent } from './user/new-user/new-user.component';
import { RateComponent } from './shared-lunch/rate/rate.component';
import { MatchComponent } from './shared-lunch/match/match.component';
import { NoMatchComponent } from './shared-lunch/no-match/no-match.component';
import { HomeComponent } from './shared-lunch/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'signup',
    component: NewUserComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: NoMatchComponent,
      },
      {
        path: 'match',
        component: MatchComponent
      },
      {
        path: 'rate',
        component: RateComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
