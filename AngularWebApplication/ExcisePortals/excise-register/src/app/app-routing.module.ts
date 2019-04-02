import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboardR/dashboard.component';
import { OverviewComponent } from './dashboardR/overview/overview.component';
import { RegisterVehicleRequestComponent } from './dashboardR/register-vehicle-request/register-vehicle-request.component';
import { RegisterVehicleRequestTableComponent } from './dashboardR/register-vehicle-request-table/register-vehicle-request-table.component';
import { DashboardTComponent } from './dashboard-t/dashboard-t.component';
import { OverviewTComponent } from './dashboard-t/overview-t/overview-t.component';
import { TransferVehicleComponent } from './dashboard-t/transfer-vehicle/transfer-vehicle.component';
import { VehiclePlateNumberComponent } from './dashboard-t/vehicle-plate-number/vehicle-plate-number.component';

const routes: Routes = [
	{path:'',redirectTo:'/login',pathMatch:'full'},
	{
		path:'login',
		component: LoginComponent,
	},
	{
		path:'dashboard',
		component: DashboardComponent,
		children:[
			{
				path:'overview',
				component:OverviewComponent,
			},
			{
				path:'register-vehicle-request',
				component:RegisterVehicleRequestComponent,
			},
			{
				path:'register-vehicle-request/register-vehicle-request-table',
				component:RegisterVehicleRequestTableComponent,
			},
			
		]
	},
	{
		path:'dashboard-t',
		component: DashboardTComponent,
		children:[
			{
				path:'overview-t',
				component: OverviewTComponent,
			},
			{
				path:'transfer-vehicle',
				component: TransferVehicleComponent,
			},
			{
				path:'vehicle-plate-number',
				component: VehiclePlateNumberComponent,
			},
		]
	},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
