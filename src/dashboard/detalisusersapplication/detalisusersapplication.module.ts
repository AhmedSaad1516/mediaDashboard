import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisusersapplicationRoutingModule } from './detalisusersapplication-routing.module';
import { ShowdetalisComponent } from './showdetalis/showdetalis.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    ShowdetalisComponent
  ],
  imports: [
    CommonModule,
    DetalisusersapplicationRoutingModule,
    DataTablesModule
  ]
})
export class DetalisusersapplicationModule { }
