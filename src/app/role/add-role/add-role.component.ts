import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { addRole$, editRole$ } from '../role.actions';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit,OnChanges {

  @Input() editRoleInput:any;
  editFlag:boolean=false;
  roleData:any ={
    role_name:''
  }
  constructor(
    private store:Store
  ) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes['editRoleInput']?.currentValue)
    {
      this.roleData = {...this.editRoleInput};
      this.editFlag= true;
    }else{
      this.editFlag = false
    }
  }

  ngOnInit(): void {
  }

  saveRole(form:any){
    if(form.valid){
      const data = {...this.roleData}
      alert(this.editFlag)
      if(!this.editFlag)
      {
        this.store.dispatch(addRole$({role:data}));
      }else{
        this.store.dispatch(editRole$({role:data,id:data.id}));

      }
      this.editFlag = false;
      this.roleData ={};
    }
  }
}
