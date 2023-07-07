import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPropromotioncustomerComponent } from './show-propromotioncustomer/show-propromotioncustomer.component';

const routes: Routes = [
  {path:'',component:ShowPropromotioncustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPropromotioncustomerRoutingModule { }
