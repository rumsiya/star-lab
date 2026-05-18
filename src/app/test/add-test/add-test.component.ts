import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Test } from '../test.models'
import { addTest$, editTest$ } from '../test.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {

  testData:any = {
    test_name:'',
    normal_min:0,
    normal_max:0,
    unit_id:0,
    price:0.00,
    description:''
  }

  @Input() editTestInput:any
  editFlag:boolean=false;
  constructor(
    private store:Store
  ) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes['editTestInput']?.currentValue){
      this.testData = {...this.editTestInput}
      this.editFlag = true;
    }else{
      this.editFlag= false
    }
  }

  ngOnInit(): void {
  }

  saveTest(form:any){
    if(form.valid){
      const data = {...this.testData}
      if(!this.editFlag){
          this.store.dispatch(addTest$({test:data}))
      }else{
          this.store.dispatch(editTest$({test:data,id:data.id}))

      }
      this.editFlag= false;
      this.testData={}
    }

  }
}
