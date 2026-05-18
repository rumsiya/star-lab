import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { TestListCheckboxComponent } from '../test-list-checkbox/test-list-checkbox.component';
import { AppointmentService } from 'src/app/services/appointment.service';
import { addAppointment$ } from '../appointment.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  logginUser :any;
  testSelected:any=[]
  bookForm:any ={
    booking_date:'',
    prefered_time:0,
    test_ids:[]
  }
  constructor(
    private authDervice:AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialog:MatDialog,
    private appoinmentService:AppointmentService,
    private store:Store
  ) {
    this.logginUser = data
  }


  ngOnInit(): void {
    this.appoinmentService.testApp$.subscribe((res:any)=>{
      this.testSelected = res;
    })

  }

  openTestList(){
   let dialogClose = this.dialog.open(TestListCheckboxComponent,{
      width:'500px'
    })
    dialogClose.afterClosed().subscribe((res:any)=>{
      this.testSelected = res;
      this.appoinmentService.setSelectedTest(this.testSelected);
    })
  }

  saveAppointment(form:any){
      if(form.valid){
        this.bookForm.test_ids = this.testSelected
        const data = this.bookForm;
        this.store.dispatch(addAppointment$({appointment:data}))
        this.appoinmentService.resetTest();
        this.dialog.closeAll()
      }
  }

}
