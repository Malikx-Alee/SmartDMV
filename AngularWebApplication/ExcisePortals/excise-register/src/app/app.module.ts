import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboardR/dashboard.component';
import { OverviewComponent } from './dashboardR/overview/overview.component';
import { RegisterVehicleRequestComponent } from './dashboardR/register-vehicle-request/register-vehicle-request.component';
import { RegisterVehicleRequestTableComponent } from './dashboardR/register-vehicle-request-table/register-vehicle-request-table.component';
import { RegisterService } from './dashboardR/register-vehicle-request/register.service';
import { RegisterVTableService } from './dashboardR/register-vehicle-request-table/registerVTable.service';

import { DashboardTComponent } from './dashboard-t/dashboard-t.component';
import { OverviewTComponent } from './dashboard-t/overview-t/overview-t.component';
import { TransferVehicleComponent } from './dashboard-t/transfer-vehicle/transfer-vehicle.component';
import { VehiclePlateNumberComponent } from './dashboard-t/vehicle-plate-number/vehicle-plate-number.component';
import { CommonModule } from '@angular/common';
import { RegisterOverviewService } from './dashboardR/overview/registerOverview.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OverviewComponent,
    RegisterVehicleRequestComponent,
    RegisterVehicleRequestTableComponent,
    DashboardTComponent,
    OverviewTComponent,
    TransferVehicleComponent,
    VehiclePlateNumberComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [RegisterService, RegisterVTableService, RegisterOverviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
