import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTest$, loadTest$ } from '../test.actions';
import { selectTest } from '../test.selector';
import { MatDialog } from '@angular/material/dialog';
import { ShowTestComponent } from '../show-test/show-test.component';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  displayedColumns:string[]=['no','test_name','normal_min','normal_max','unit','price','description','actions']
  test$!:Observable<any>;
  dataSource = new MatTableDataSource<any>();
  editTestInput:any;

  constructor(
    private store:Store,
    private dialog:MatDialog
  ) {
    this.store.dispatch(loadTest$());
  }

  ngOnInit(): void {
    this.test$ = this.store.select(selectTest);
    this.test$.subscribe((res:any)=>{
      this.dataSource.data = res
    })
  }

  showTest(test:any){
    const dialogref = this.dialog.open(ShowTestComponent,{
      data:test,
      width:'500px'
    })
  }

  editTest(test:any){
    this.editTestInput = {...test}
  }

  deleteTest(test:any){
    this.store.dispatch(deleteTest$({test:test,id:test.id}))
  }


}
