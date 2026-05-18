import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser$ } from '../user.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addForm:any = new FormGroup({
    'username' : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email' :new FormControl('',[Validators.required,Validators.email]),
    'role' : new FormControl('',[Validators.required]),
    'phone': new FormControl('',[Validators.required,Validators.pattern(/^[8-9][0-9]{9}$/)]),
    'age' : new FormControl('',[Validators.required,Validators.min(15),Validators.max(80)]),
    'gender': new FormControl('',[Validators.required])

  })
  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
  }

  addUser(){

    if(this.addForm.valid){
      const data = this.addForm.value;
      this.store.dispatch(addUser$({user:data}))
      this.addForm.reset()
    }

  }

}
