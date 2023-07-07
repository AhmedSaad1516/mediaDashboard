import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostsComponent } from './costs/costs.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    CostsComponent
  ],
  imports: [
    CommonModule,
    CostsRoutingModule,
    DataTablesModule
  ]
})
export class CostsModule { }
