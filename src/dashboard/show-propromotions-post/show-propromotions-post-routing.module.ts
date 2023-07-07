import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPropPostComponent } from './show-prop-post/show-prop-post.component';

const routes: Routes = [
  {path:'',component:ShowPropPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPropromotionsPostRoutingModule { }
