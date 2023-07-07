import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    DataTablesModule
  ]
})
export class PromotionsModule { }
