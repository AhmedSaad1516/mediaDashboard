import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowgroupRoutingModule } from './showgroup-routing.module';
import { ShowgroupComponent } from './showgroup/showgroup.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    ShowgroupComponent
  ],
  imports: [
    CommonModule,
    ShowgroupRoutingModule,
    DataTablesModule
  ]
})
export class ShowgroupModule { }
