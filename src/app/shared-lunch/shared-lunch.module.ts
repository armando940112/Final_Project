import { SharedLunchRoutingModule } from './shared-lunch-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { NoMatchComponent } from './no-match/no-match.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RateComponent } from './rate/rate.component';
import { MessageComponent } from './message/message.component';
import { AppCommonModule } from '../app-common.module';

@NgModule({
  imports: [
   CommonModule, FormsModule, AppCommonModule, SharedLunchRoutingModule
  ],
  declarations: [HomeComponent, MatchComponent, NoMatchComponent, AvatarComponent, RateComponent, MessageComponent]
})
export class SharedLunchModule { }
