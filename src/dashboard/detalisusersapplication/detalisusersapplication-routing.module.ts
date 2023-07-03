import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowdetalisComponent } from './showdetalis/showdetalis.component';

const routes: Routes = [
  {path:'',component:ShowdetalisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalisusersapplicationRoutingModule { }
