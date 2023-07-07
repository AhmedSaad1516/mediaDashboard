import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowPropromotionsPostRoutingModule } from './show-propromotions-post-routing.module';
import { ShowPropPostComponent } from './show-prop-post/show-prop-post.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    ShowPropPostComponent
  ],
  imports: [
    CommonModule,
    ShowPropromotionsPostRoutingModule,
    DataTablesModule
  ]
})
export class ShowPropromotionsPostModule { }
