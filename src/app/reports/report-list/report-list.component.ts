import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadReport$ } from './report.action';
import { selectReport } from './report.selector';
import { ReportService } from 'src/app/services/report.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  displayedColumns :string[] =['no','test_name','booked_date','actions']
  report$!:Observable<any>;
  dataSource = new MatTableDataSource<any>()
  constructor(
    private store:Store,
    private reportService:ReportService
  ) {
    this.store.dispatch(loadReport$());
  }

  ngOnInit(): void {
    this.report$ = this.store.select(selectReport);
    this.report$.subscribe((res:any)=>{
      this.dataSource.data = res;
      console.log(res)
    })
  }

  download(row:any){
    this.reportService.download(row.id).subscribe((blob)=>{
        saveAs(blob, row.get_appointment.booking_id+'_report.pdf');
    })
  }

}
