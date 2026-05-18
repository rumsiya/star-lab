import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { deleteUser$, loadUser$ } from '../user.action';
import { selectUser } from '../user.selector';
import { MatDialog } from '@angular/material/dialog';
import { ShowUserComponent } from '../show-user/show-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColums = ['no','name','email','role','phone','age','gender','actions'];
  dataSource = new MatTableDataSource<any>();

  user$!:Observable<any>;
  constructor(
    private userService:UserService,
    private store:Store,
    private dialog:MatDialog
  ) {
    this.store.dispatch(loadUser$())

  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser)
    console.log(this.user$)
    this.user$.subscribe((res:any)=>{
      this.dataSource.data = res
    })


  }

  showUser(user:any){
    console.log(user)
    let showDialog = this.dialog.open(ShowUserComponent,{
      data:user,
      width:'500px'
    })

  }

  editUser(user:any){
    let editDialog = this.dialog.open(EditUserComponent,
      {
        data:user,
        width:'450px'
      }
    )
  }

  deleteUser(user:any){
    this.store.dispatch(deleteUser$({user:user,id:user.id}))
  }




}
