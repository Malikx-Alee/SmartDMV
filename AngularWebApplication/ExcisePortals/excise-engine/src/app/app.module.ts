import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnginedashboardComponent } from './enginedashboard/enginedashboard.component';
import { EngineoverviewComponent } from './enginedashboard/engineoverview/engineoverview.component';
import { ChangeEngineNoComponent } from './enginedashboard/change-engine-no/change-engine-no.component';
import { EngineAlotTimeComponent } from './enginedashboard/engine-alot-time/engine-alot-time.component';
import { AllottingComponent } from './enginedashboard/allotting/allotting.component';
import { AlotTimeService } from './enginedashboard/engine-alot-time/alotTime.service';
import { HttpClientModule } from '@angular/common/http';
import { AlotService } from './enginedashboard/allotting/alot.service';
import { OverviewService } from './enginedashboard/engineoverview/overview.service';
import { ChangeEngineService } from './enginedashboard/change-engine-no/changeEngine.sevice';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnginedashboardComponent,
    EngineoverviewComponent,
    ChangeEngineNoComponent,
    EngineAlotTimeComponent,
    AllottingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlotTimeService, AlotService, OverviewService, ChangeEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
