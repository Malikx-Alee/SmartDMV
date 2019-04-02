import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { RegisterVComponent } from './dashboard/register-v/register-v.component';
import { TransferVComponent } from './dashboard/transfer-v/transfer-v.component';
import { BlockVComponent } from './dashboard/block-v/block-v.component';
import { EngineNComponent } from './dashboard/engine-n/engine-n.component';
import { TokenTComponent } from './dashboard/token-t/token-t.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { OverviewService } from './dashboard/overview/overview.service';
import { TransferService } from './dashboard/transfer-v/transfer.service';
import { RegisterService } from './dashboard/register-v/register.service';
import { BlockService } from './dashboard/block-v/block.service';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { AppGlobals } from './app.global';
import { TokenService } from './dashboard/token-t/token.service';
import { EngineService } from './dashboard/engine-n/engine.service';
import { LoginService } from './login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterVComponent,
    TransferVComponent,
    BlockVComponent,
    EngineNComponent,
    TokenTComponent,
    OverviewComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot() 
    
  ],
  providers: [OverviewService,TransferService,RegisterService, BlockService, SignupService, TokenService, AppGlobals, EngineService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
