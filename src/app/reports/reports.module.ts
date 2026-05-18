import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ShowReportComponent } from './show-report/show-report.component';
import { FormsModule } from '@angular/forms';
import { PublicModule } from '../public/public.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AddReportComponent,
    ReportListComponent,
    ShowReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicModule,
    MatTableModule
  ],
  exports:[AddReportComponent]
})
export class ReportsModule { }
