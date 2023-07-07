import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GuardDashbardGuard } from 'src/core/guard-dashbard.guard';

const routes: Routes = [
   {
    path:'',
   component:NavbarComponent,
   canActivateChild:[GuardDashbardGuard],
   children:[
  
    {path:'home',
 loadChildren: () =>import('../dashboard/home/home.module').then(m => m.HomeModule)},
 {path:'interests',
 loadChildren: () =>import('../dashboard/interests/interests.module').then(m => m.InterestsModule)},
   
 {path:'announcement',
 loadChildren: () =>import('../dashboard/announcement/announcement.module').then(m => m.AnnouncementModule)},
      
 {path:'all-employee',
 loadChildren: () =>import('../dashboard/users/users.module').then(m => m.UsersModule)},
       
 {path:'detalis-employee/:id',
 loadChildren: () =>import('../dashboard/showdetalisusers/showdetalisusers.module').then(m => m.ShowdetalisusersModule)},

 
 {path:'all-roles',
 loadChildren: () =>import('../dashboard/allroles/allroles.module').then(m => m.AllrolesModule)},
   

 
 {path:'profile',
 loadChildren: () =>import('../dashboard/profile/profile.module').then(m => m.ProfileModule)},
 {path:'terms-and-conditions',
 loadChildren: () =>import('../dashboard/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)},
 {path:'policy-and-privacy',
 loadChildren: () =>import('../dashboard/policy-and-privacyt/policy-and-privacyt.module').then(m => m.PolicyAndPrivacytModule)},
   
 {path:'all-users',
 loadChildren: () =>import('../dashboard/users-application/users-application.module').then(m => m.UsersApplicationModule)},
   
 {path:'detalis-users/:id',
 loadChildren: () =>import('../dashboard/detalisusersapplication/detalisusersapplication.module').then(m => m.DetalisusersapplicationModule)},
 
 {path:'detalis-group/:id',
 loadChildren: () =>import('../dashboard/showgroup/showgroup.module').then(m => m.ShowgroupModule)},
 
  
 {path:'detalis-reels/:id',
 loadChildren: () =>import('../dashboard/showreelsuser/showreelsuser.module').then(m => m.ShowreelsuserModule)},
 
 {path:'promotions',
 loadChildren: () =>import('../dashboard/promotions/promotions.module').then(m => m.PromotionsModule)},
 
  
 {path:'contactUs',
 loadChildren: () =>import('../dashboard/contact-us/contact-us.module').then(m => m.ContactUsModule)},
 
 {path:'costs',
 loadChildren: () =>import('../dashboard/costs/costs.module').then(m => m.CostsModule)},
 
 {path:'detalis-promotions/:id',
 loadChildren: () =>import('../dashboard/show-propromotions-post/show-propromotions-post.module').then(m => m.ShowPropromotionsPostModule)},
 
 {path:'detalis-promotions-customer/:id',
 loadChildren: () =>import('../dashboard/show-propromotioncustomer/show-propromotioncustomer.module').then(m => m.ShowPropromotioncustomerModule)},
 
 
 
 
 
 



]

   
   }  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
