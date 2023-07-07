import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ToastrModule.forRoot(),
    NgToastModule
  ]
})
export class AuthModule { }
