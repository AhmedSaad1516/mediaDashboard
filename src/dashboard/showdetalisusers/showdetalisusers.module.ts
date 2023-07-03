import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowdetalisusersRoutingModule } from './showdetalisusers-routing.module';
import { DetalisUserComponent } from './detalis-user/detalis-user.component';


@NgModule({
  declarations: [
    DetalisUserComponent
  ],
  imports: [
    CommonModule,
    ShowdetalisusersRoutingModule
  ]
})
export class ShowdetalisusersModule { }
