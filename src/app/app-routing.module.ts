import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { GuardDashbardGuard } from 'src/core/guard-dashbard.guard';
import { GuardLoginGuard } from 'src/core/guard-login.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[GuardLoginGuard]},

  {path:'',
  loadChildren: () =>import('../dashboard/dashboard.module').then(m => m.DashboardModule)},

  {path:'login',
  loadChildren: () =>import('../auth/login/login.module').then(m => m.LoginModule),canActivate:[GuardLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
