import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyoutComponent } from './leyout/leyout.component';

const routes: Routes = [
  {path:'',component:LeyoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
