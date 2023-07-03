import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersapplicationComponent } from './usersapplication/usersapplication.component';

const routes: Routes = [
  {path:'',component:UsersapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersApplicationRoutingModule { }
