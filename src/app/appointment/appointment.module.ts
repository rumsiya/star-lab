import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ShowAppointmentComponent } from './show-appointment/show-appointment.component';
import { PublicModule } from '../public/public.module';
import { MatTableModule } from '@angular/material/table';
import { TestListCheckboxComponent } from './test-list-checkbox/test-list-checkbox.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from '@angular/router';
import { AppointmentTestModule } from '../appointment-test/appointment-test.module';



@NgModule({
  declarations: [
    AppointmentListComponent,
    AddAppointmentComponent,
    ShowAppointmentComponent,
    TestListCheckboxComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class AppointmentModule { }
