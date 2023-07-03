import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllrolesRoutingModule } from './allroles-routing.module';
import { AddrolesComponent } from './AllRoles/addroles.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddrolesComponent
  ],
  imports: [
    CommonModule,
    AllrolesRoutingModule,
    MatDialogModule
  ]
})
export class AllrolesModule { }
