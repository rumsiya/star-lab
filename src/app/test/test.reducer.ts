import { createReducer, on } from "@ngrx/store";
import { Test } from "./test.models";
import { addTest$, addTestSuccess$, deleteTestSuccess$, editTestSuccess$, loadTestSuccess$ } from "./test.actions";


export interface TestState{
  test:Test[];
}

export const initialTestState:TestState ={
  test:[]
}

export const testReducer = createReducer(
  initialTestState,
  on(loadTestSuccess$,(state,{test})=>({
      ...state,
      test:test
    })
  ),
  on(addTestSuccess$,(state,{test})=>({
      ...state,
      test:[...state.test,test]
    })
  ),
  on(editTestSuccess$,(state,{test,id})=>({
      ...state,
      test:[...state.test.map((u,i)=>u.id==id?test:u)]
    })
  ),
  on(deleteTestSuccess$,(state,{test,id})=>({
      ...state,
      test:[...state.test.filter((u,_)=>u.id!==id)]
    })
  )

)
