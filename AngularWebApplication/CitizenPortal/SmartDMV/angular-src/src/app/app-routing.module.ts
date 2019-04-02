import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterVComponent } from './dashboard/register-v/register-v.component';
import { TransferVComponent } from './dashboard/transfer-v/transfer-v.component';
import { BlockVComponent } from './dashboard/block-v/block-v.component';
import { EngineNComponent } from './dashboard/engine-n/engine-n.component';
import { TokenTComponent } from './dashboard/token-t/token-t.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{path:'',redirectTo:'/login',pathMatch:'full'},
	{
		path: 'signup',
		component: SignupComponent,
	},
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
				component: OverviewComponent,
			},
			{
				path:'register-v',
				component: RegisterVComponent,
			},
			{
				path:'transfer-v',
				component: TransferVComponent,
			},
			{
				path:'block-v',
				component: BlockVComponent,
			},
			{
				path:'engine-n',
				component: EngineNComponent,
			},
			{
				path:'token-t',
				component: TokenTComponent,
			},
		]
	},
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = {}
