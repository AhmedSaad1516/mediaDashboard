import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule,
    MatDialogModule,
    DataTablesModule

  ]
})
export class TermsAndConditionsModule { }
