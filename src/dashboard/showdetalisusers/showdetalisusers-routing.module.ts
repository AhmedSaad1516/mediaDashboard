import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisUserComponent } from './detalis-user/detalis-user.component';

const routes: Routes = [
  {path:'',component:DetalisUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowdetalisusersRoutingModule { }
