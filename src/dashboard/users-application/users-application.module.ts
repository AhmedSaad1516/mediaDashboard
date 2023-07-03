import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersApplicationRoutingModule } from './users-application-routing.module';
import { UsersapplicationComponent } from './usersapplication/usersapplication.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    UsersapplicationComponent
  ],
  imports: [
    CommonModule,
    UsersApplicationRoutingModule,
    MatDialogModule,
    DataTablesModule
  ]
})
export class UsersApplicationModule { }
