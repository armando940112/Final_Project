import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { NoMatchComponent } from './no-match/no-match.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RateComponent } from './rate/rate.component';



@NgModule({
  imports: [
   CommonModule, RouterModule
  ],
  declarations: [HomeComponent, MatchComponent, NoMatchComponent, AvatarComponent, RateComponent]
})
export class SharedLunchModule { }
