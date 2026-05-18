import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { ViewAppointmentTestComponent } from './appointment-test/view-appointment-test/view-appointment-test.component';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'register' , component:RegisterComponent},
  { path:'' , redirectTo:'login' ,pathMatch:'full'},
  { path:'dashboard' , component:DashboardComponent ,canActivate:[AuthGuard]},
  { path:'user', component:UserListComponent , canActivate:[RoleGuard,AuthGuard]},
  { path:'role' , component:RoleListComponent , canActivate:[RoleGuard,AuthGuard]},
  { path:'test' , component:TestListComponent , canActivate:[RoleGuard,AuthGuard]},
  { path:'appointment',component:AppointmentListComponent ,canActivate:[AuthGuard]},
  { path:'view-appointment-test/:id' ,component:ViewAppointmentTestComponent ,canActivate:[AuthGuard]},
  { path:'reports' ,component:ReportListComponent ,canActivate:[AuthGuard]},
  { path:'**' , component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
