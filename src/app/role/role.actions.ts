import { createAction, props } from "@ngrx/store";
import { Role } from "./role.models";

export const loadRole$ = createAction('[role] load roles');
export const loadRoleSuccess$ = createAction('[role] load role success',props<{role:Role[]}>())

export const addRole$ = createAction('[role] add role',props<{role:Role}>());
export const addRoleSuccess$ = createAction('[role] add role success',props<{role:Role}>());

export const editRole$ = createAction('[role] edit role',props<{role:Role,id:number}>());
export const editRoleSuccess$ = createAction('[role] edit role success',props<{role:Role,id:number}>());

export const deleteRole$ = createAction('[role] delete role',props<{role:Role,id:number}>());
export const deleteRoleSuccess$ = createAction('[role] delete role success',props<{role:Role,id:number}>());


