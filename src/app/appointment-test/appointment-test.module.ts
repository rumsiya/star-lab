import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppointmentTestComponent } from './view-appointment-test/view-appointment-test.component';
import { PublicModule } from '../public/public.module';
import { MatTableModule } from '@angular/material/table';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { ReportsModule } from '../reports/reports.module';



@NgModule({
  declarations: [
    ViewAppointmentTestComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    MatTableModule,
    ReportsModule
  ]
})
export class AppointmentTestModule { }
