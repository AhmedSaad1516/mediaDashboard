import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowPropromotioncustomerRoutingModule } from './show-propromotioncustomer-routing.module';
import { ShowPropromotioncustomerComponent } from './show-propromotioncustomer/show-propromotioncustomer.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    ShowPropromotioncustomerComponent
  ],
  imports: [
    CommonModule,
    ShowPropromotioncustomerRoutingModule,
    DataTablesModule
  ]
})
export class ShowPropromotioncustomerModule { }
