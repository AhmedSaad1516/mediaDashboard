import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgToastModule } from 'ng-angular-popup' // to be added


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgToastModule
  ]
})
export class DashboardModule { }
