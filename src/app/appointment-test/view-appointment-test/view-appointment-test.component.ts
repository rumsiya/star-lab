import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { viewAppointmentTest$ } from '../appointment-test.actions';
import { selectAppointmentTest, selectedAppointment } from '../appointment-test.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AddReportComponent } from 'src/app/reports/add-report/add-report.component';

@Component({
  selector: 'app-view-appointment-test',
  templateUrl: './view-appointment-test.component.html',
  styleUrls: ['./view-appointment-test.component.scss']
})
export class ViewAppointmentTestComponent implements OnInit {

  appointmentId:any;
  displayedColumns:string[] = ['no','test_name','status','staff','actions'];
  dataSource = new MatTableDataSource<any>()
  appointment:any;
  appointmentTest:any;
  appTest$!: Observable<any>
  appo$!:Observable<any>
  generate:any=[];
  constructor(
    private route:ActivatedRoute,
    private store:Store,
    private dialog:MatDialog
  ) {
      this.appointmentId= this.route.snapshot.paramMap.get('id')
      this.store.dispatch(viewAppointmentTest$({id:this.appointmentId}))
   }

  ngOnInit(): void {
    this.appTest$ = this.store.select(selectAppointmentTest)
    this.appo$ = this.store.select(selectedAppointment)
    this.appTest$.subscribe((res:any)=>{
      this.dataSource.data = res;
      this.appointmentTest= res;
      this.generate = this.appointmentTest.map((t:any) => t.status_id === 5?true:false);
    console.log(this.generate)

    })
    this.appo$.subscribe((resApp:any)=>{
      this.appointment = resApp;
    })


  }

  generateReport(row:any,i:number){
        console.log(this.generate)

    const dia = this.dialog.open(AddReportComponent,
      {
        data:{
          appointment:this.appointment,
          appointmentTest:row
        },
        width:'800px'
      }
    )
    dia.afterClosed().subscribe((res:any)=>{
      if(res){
        this.generate[i]= true;
      }
    })
  }

}
