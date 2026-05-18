import { createAction, props } from "@ngrx/store";
import { User } from "./user.models";

export const loadUser$ = createAction('[User] load users');
export const loadUserSuccess$ = createAction('[User] load user success',props<{user:User[]}>())

export const addUser$ = createAction('[User] add user',props<{user:User}>());
export const addUserSuccess$ = createAction('[User] add user success',props<{user:User}>());

export const editUser$ = createAction('[User] edit user',props<{user:User,id:number}>());
export const editUserSuccess$ = createAction('[User] edit user success',props<{user:User,id:number}>());

export const deleteUser$ = createAction('[User] delete user',props<{user:User,id:number}>());
export const deleteUserSuccess$ = createAction('[User] delete user success',props<{user:User,id:number}>());


