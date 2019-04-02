import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnginedashboardComponent } from './enginedashboard/enginedashboard.component';
import { EngineoverviewComponent } from './enginedashboard/engineoverview/engineoverview.component';
import { EngineAlotTimeComponent } from './enginedashboard/engine-alot-time/engine-alot-time.component';
import { ChangeEngineNoComponent } from './enginedashboard/change-engine-no/change-engine-no.component';
import { AllottingComponent } from './enginedashboard/allotting/allotting.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
	{
		path:'login',
		component: LoginComponent,
	},
	{
		path:'dashboard',
		component: EnginedashboardComponent,
		children:[
			{
				path:'overview',
				component:EngineoverviewComponent,
			},
			{
				path:'alot-time&date',
				component:EngineAlotTimeComponent,
			},
			
			{
				path:'change-engine-no',
				component:ChangeEngineNoComponent,
			},
			{
				path:'alot-time&date/allotting',
				component:AllottingComponent,
			},
			
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
