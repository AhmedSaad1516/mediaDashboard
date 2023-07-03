import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrolesComponent } from './AllRoles/addroles.component';

const routes: Routes = [
  {path:'',component:AddrolesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllrolesRoutingModule { }
