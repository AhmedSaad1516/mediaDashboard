import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    MatDialogModule,
    DataTablesModule
  ]
})
export class AnnouncementModule { }
