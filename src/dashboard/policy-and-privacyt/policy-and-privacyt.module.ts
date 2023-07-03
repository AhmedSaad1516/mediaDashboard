import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyAndPrivacytRoutingModule } from './policy-and-privacyt-routing.module';
import { PolicyAndPrivacyComponent } from './policy-and-privacy/policy-and-privacy.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    PolicyAndPrivacyComponent
  ],
  imports: [
    CommonModule,
    PolicyAndPrivacytRoutingModule,
    MatDialogModule,
    DataTablesModule
  ]
})
export class PolicyAndPrivacytModule { }
