import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowgroupComponent } from './showgroup/showgroup.component';

const routes: Routes = [
  {path:'',component:ShowgroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowgroupRoutingModule { }
