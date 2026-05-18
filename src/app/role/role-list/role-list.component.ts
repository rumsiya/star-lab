import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteRole$, loadRole$ } from '../role.actions';
import { selectRole } from '../role.selector';
import { MatDialog } from '@angular/material/dialog';
import { ShowRoleComponent } from '../show-role/show-role.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns:string[] = ['no', 'role_name', 'actions'];
  role$!:Observable<any>
  dataSource=new MatTableDataSource<any>();
  editRoleInput:any;
  editRoleFlag:boolean=true;
  constructor(
    private store:Store,
    private dialog:MatDialog
  ) {

    this.store.dispatch(loadRole$());
  }

  ngOnInit(): void {
    this.role$ = this.store.select(selectRole);
    this.role$.subscribe((res:any)=>{
      this.dataSource.data= res
    })
  }

  showRole(role:any){
    let roleDia = this.dialog.open(ShowRoleComponent,{
      data:role,
      width:'500px'
    })
  }

  editRole(role:any){
    console.log(role)
    this.editRoleInput = {...role}
  }

  deleteRole(role:any){
    this.store.dispatch(deleteRole$({role:role,id:role.id}))
  }

}
