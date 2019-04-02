import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransferdashboardComponent } from './transferdashboard/transferdashboard.component';
import { TransferoverviewComponent } from './transferdashboard/transferoverview/transferoverview.component';
import { TransferVehicleComponent } from './transferdashboard/transfer-vehicle/transfer-vehicle.component';
import { VehicleNumberPlateComponent } from './transferdashboard/vehicle-number-plate/vehicle-number-plate.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
	{
		path:'login',
		component: LoginComponent,
	},
	{
    path:'dashboard',
    component:TransferdashboardComponent,
    children:[
        {
          path:'overview',
          component:TransferoverviewComponent,
        },
        {
          path:'transfer-vehicle',
          component:TransferVehicleComponent,
        },
        {
          path:'transfer-vehicle/vehicle-number-plate',
          component:VehicleNumberPlateComponent,
        },
    ]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
