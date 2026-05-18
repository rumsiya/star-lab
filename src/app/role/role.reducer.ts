import { createReducer, on } from "@ngrx/store";
import { Role } from "./role.models";
import { addRole$, addRoleSuccess$, deleteRoleSuccess$, editRoleSuccess$, loadRoleSuccess$ } from "./role.actions";


export interface RoleState{
  role:Role[];
}

export const initialRoleState:RoleState ={
  role:[]
}

export const roleReducer = createReducer(
  initialRoleState,
  on(loadRoleSuccess$,(state,{role})=>({
      ...state,
      role:role
    })
  ),
  on(addRoleSuccess$,(state,{role})=>({
      ...state,
      role:[...state.role,role]
    })
  ),
  on(editRoleSuccess$,(state,{role,id})=>({
      ...state,
      role:[...state.role.map((u,i)=>u.id==id?role:u)]
    })
  ),
  on(deleteRoleSuccess$,(state,{role,id})=>({
      ...state,
      role:[...state.role.filter((u,_)=>u.id!==id)]
    })
  )

)
