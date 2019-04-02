import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlockdashboardComponent } from './blockdashboard/blockdashboard.component';

import { BlockVehicleComponent } from './blockdashboard/block-vehicle/block-vehicle.component';
import { UnblockVehicleComponent } from './blockdashboard/unblock-vehicle/unblock-vehicle.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
	{
		path:'login',
		component: LoginComponent,
	},
	{
    path:'dashboard',
    component:BlockdashboardComponent,
    children:[
        {
          path:'block-vehicle',
          component:BlockVehicleComponent,
        },
        {
          path:'unblock-vehicle',
          component:UnblockVehicleComponent,
        },
    ]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
