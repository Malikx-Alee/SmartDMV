import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TransferdashboardComponent } from './transferdashboard/transferdashboard.component';
import { TransferoverviewComponent } from './transferdashboard/transferoverview/transferoverview.component';
import { TransferVehicleComponent } from './transferdashboard/transfer-vehicle/transfer-vehicle.component';
import { VehicleNumberPlateComponent } from './transferdashboard/vehicle-number-plate/vehicle-number-plate.component';
import { TransferService } from './transferdashboard/transfer-vehicle/transfer.service';
import { HttpClientModule } from '@angular/common/http';
import { VehicleTransferService } from './transferdashboard/vehicle-number-plate/vehicletransfer.service';
import { TransferOverviewService } from './transferdashboard/transferoverview/transferOverview.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransferdashboardComponent,
    TransferoverviewComponent,
    TransferVehicleComponent,
    VehicleNumberPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TransferService,VehicleTransferService, TransferOverviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
