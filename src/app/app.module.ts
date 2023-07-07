import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { AuthModule } from 'src/auth/auth.module';
import { LoginModule } from 'src/auth/login/login.module';
import { CoreModule } from 'src/core/core.module';
import { InterceptorErrorModule } from 'src/interceptor-error/interceptor-error.module';
import { AddinterestsModule } from 'src/dashboard/addinterests/addinterests.module';
import { AddannouncementModule } from 'src/dashboard/addannouncement/addannouncement.module';
import { AddusersModule } from 'src/dashboard/addusers/addusers.module';
import { EditprfileModule } from 'src/dashboard/editprfile/editprfile.module';
import { AddtermsAndConditionsModule } from 'src/dashboard/addterms-and-conditions/addterms-and-conditions.module';
import { AddpolicyAndPrivacyModule } from 'src/dashboard/addpolicy-and-privacy/addpolicy-and-privacy.module';
import { AddrolesModule } from 'src/dashboard/addroles/addroles.module';
import { DataTablesModule } from "angular-datatables";
import { UpdateCostsModule } from 'src/dashboard/update-costs/update-costs.module';
import {NgToastModule} from 'ng-angular-popup';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    DashboardModule,
    AddannouncementModule,
    AuthModule,
    LoginModule,
    CoreModule,
    InterceptorErrorModule,
    AddinterestsModule,
    AddusersModule,
    EditprfileModule,
    AddtermsAndConditionsModule,
    AddpolicyAndPrivacyModule,
    AddrolesModule,
    DataTablesModule,
    UpdateCostsModule,
    NgToastModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
