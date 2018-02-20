import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule
  ],
  exports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  declarations: []
})
export class AppCommonModule { }
