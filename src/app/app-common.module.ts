import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule
  ],
  exports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
  declarations: []
})
export class AppCommonModule { }
