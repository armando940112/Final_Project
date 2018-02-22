import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../authentication/auth-guard.service';
import { NoMatchComponent } from './no-match/no-match.component';
import { MatchComponent } from './match/match.component';
import { RateComponent } from './rate/rate.component';
import { MessageComponent } from './message/message.component';

const sharedRoutes: Routes = [
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
      },
      {
        path: 'message',
        component: MessageComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(sharedRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class SharedLunchRoutingModule { }
