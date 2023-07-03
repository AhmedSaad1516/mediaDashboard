import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowreelsuserRoutingModule } from './showreelsuser-routing.module';
import { ShowreelsComponent } from './showreels/showreels.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    ShowreelsComponent
  ],
  imports: [
    CommonModule,
    ShowreelsuserRoutingModule,
    DataTablesModule
  ]
})
export class ShowreelsuserModule { }
