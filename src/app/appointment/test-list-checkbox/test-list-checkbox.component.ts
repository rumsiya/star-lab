import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { loadTest$ } from 'src/app/test/test.actions';
import { selectTest } from 'src/app/test/test.selector';

@Component({
  selector: 'app-test-list-checkbox',
  templateUrl: './test-list-checkbox.component.html',
  styleUrls: ['./test-list-checkbox.component.scss']
})
export class TestListCheckboxComponent implements OnInit {

  test$!:Observable<any>;
  selectedTest:any=[];
  constructor(
    private store:Store,
    private dialogRef:MatDialogRef<TestListCheckboxComponent>,
    private appointService:AppointmentService
  ) {
    this.store.dispatch(loadTest$())
  }

  ngOnInit(): void {
    this.test$ = this.store.select(selectTest)
    console.log(this.test$)
    this.appointService.testApp$.subscribe((res:any)=>{
      this.selectedTest = res?res:[];
    })
        console.log(this.selectedTest)

  }

  onTestChecked(event:any,t:any){
    if(event.target.checked){
      this.selectedTest.push(t.id)
    }else{
      this.selectedTest = this.selectedTest.filter((s:any)=>s!==t.id)
    }
    console.log(this.selectedTest)
  }

  save(){
    this.dialogRef.close(this.selectedTest)
  }

  isChecked(t:any){
      return this.selectedTest.includes(t);

  }

}
