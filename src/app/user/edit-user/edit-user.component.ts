import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editUser$ } from '../user.action';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user:any
  constructor(
    @Inject(MAT_DIALOG_DATA) data:any,
    private matDialogRef:MatDialogRef<EditUserComponent>,
    private store:Store
  ) {
    this.user = data;
  }

  editData :any ={
    username:'',
    email:'',
    role:0,
    phone:'',
    age:null,
    gender:null
  }


  ngOnInit(): void {

    this.editData = {...this.user}
    console.log(this.editData)
  }

  close(){}

  save(form:any){
    if(form.valid){
      const data = {...this.editData};
      console.log(data.username)
      this.store.dispatch(editUser$({user:data,id:data.id}))
      this.matDialogRef.close();
    }
  }

}
