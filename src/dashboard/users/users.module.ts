import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatDialogModule,
    DataTablesModule

  ]
})
export class UsersModule { }
