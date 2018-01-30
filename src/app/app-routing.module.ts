import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';

//AppComponent
import { LoginComponent } from './component/login/login.component';
import { TenantAdminDashboardComponent } from './component/tenant-admin-dashboard/tenant-admin-dashboard.component';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
import { AddTenantAdminComponent } from './component/add-tenant-admin/add-tenant-admin.component';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
// {path:"",component:LoginComponent},
{path:"Login",component:LoginComponent},
{path:"TenantAdminDashboard",component:TenantAdminDashboardComponent,canActivate: [AuthGuardService]},
{path:"AdminUser/:label",component:AdminUserComponent,canActivate: [AuthGuardService]},
{path:"AddTenantAdmin",component:AddTenantAdminComponent,canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,TenantAdminDashboardComponent,AdminUserComponent,AddTenantAdminComponent,SidenavbarComponent];
