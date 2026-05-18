import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  appointTest:any;
  appointment:any;
  reportData :any={
    appointment_id:null,
    test_id:null,
    min_result:0.00,
    max_result:0.00,
    unit_id:0,
    description:''
  }
  constructor(
    private reportService:ReportService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialog:MatDialogRef<AddReportComponent>
  ) {
    this.appointTest = data.appointmentTest;
    this.appointment = data.appointment

    this.reportData.appointment_id= this.appointment.id;
    this.reportData.test_id = this.appointTest.test_id
    this.reportData.unit_id = this.appointTest.get_test.unit_id
  }

  ngOnInit(): void {
    console.log(this.reportData)
  }

  saveReport(form :any){
    if(form.valid){
      const data = this.reportData;
      this.reportService.addReport(data).subscribe((res:any)=>{
        let dialog = this.dialog.close(true)
      })
    }

  }

}
