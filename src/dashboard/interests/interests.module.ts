import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestsRoutingModule } from './interests-routing.module';
import { InterestsComponent } from './interests/interests.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    InterestsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    InterestsRoutingModule,
  MatDialogModule

  
  ]
})
export class InterestsModule { }
