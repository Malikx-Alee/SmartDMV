import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlockdashboardComponent } from './blockdashboard/blockdashboard.component';
import { BlockVehicleComponent } from './blockdashboard/block-vehicle/block-vehicle.component';
import { UnblockVehicleComponent } from './blockdashboard/unblock-vehicle/unblock-vehicle.component';
import { BlockService } from './blockdashboard/block-vehicle/block.service';
import { UnblockService } from './blockdashboard/unblock-vehicle/unblock.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlockdashboardComponent,
    BlockVehicleComponent,
    UnblockVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlockService , UnblockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
