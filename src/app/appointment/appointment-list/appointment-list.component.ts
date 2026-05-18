import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { loadAppointment$ } from '../appointment.actions';
import { selectAppointment } from '../appointment.selector';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  displayedColumns:string[] = ['no','booking_id','patient','staff','status','booking_date','actions'];
  dataSource = new MatTableDataSource<any>();
  appoint$!: Observable<any>;
  logginUser:any
  constructor(
    private dialog:MatDialog,
    private store:Store,
    private authService:AuthService
  ) {
    this.store.dispatch(loadAppointment$())
  }

  ngOnInit(): void {
    this.appoint$ = this.store.select(selectAppointment);

    this.appoint$.subscribe((res:any)=>{

      this.dataSource.data = res
      console.log(res)
    })
    this.authService.user$.subscribe((res:any)=>{
      this.logginUser=res;
      console.log(res)
    })



  }

  showAppoint(appoint:any){

  }

  editAppoint(appoint:any){

  }

  deleteAppoint(appoint:any){

  }

  addAppoint(){
    const dia = this.dialog.open(AddAppointmentComponent,
      {
        data:this.logginUser,
        width:'700px'
      }
    )
  }



}
