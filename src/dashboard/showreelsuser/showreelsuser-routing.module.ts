import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowreelsComponent } from './showreels/showreels.component';

const routes: Routes = [
  {path:'',component:ShowreelsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowreelsuserRoutingModule { }
