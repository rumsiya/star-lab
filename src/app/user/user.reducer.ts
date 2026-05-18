import { createReducer, on } from "@ngrx/store";
import { User } from "./user.models";
import { addUser$, addUserSuccess$, deleteUserSuccess$, editUserSuccess$, loadUserSuccess$ } from "./user.action";


export interface UserState{
  user:User[];
}

export const initialUserState:UserState ={
  user:[]
}

export const userReducer = createReducer(
  initialUserState,
  on(loadUserSuccess$,(state,{user})=>({
      ...state,
      user:user
    })
  ),
  on(addUserSuccess$,(state,{user})=>({
      ...state,
      user:[...state.user,user]
    })
  ),
  on(editUserSuccess$,(state,{user,id})=>({
      ...state,
      user:[...state.user.map((u,i)=>u.id==id?user:u)]
    })
  ),
  on(deleteUserSuccess$,(state,{user,id})=>({
      ...state,
      user:[...state.user.filter((u,_)=>u.id!==id)]
    })
  )

)
