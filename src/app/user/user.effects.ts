import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addUser$, addUserSuccess$, deleteUser$, deleteUserSuccess$, editUser$, editUserSuccess$, loadUser$, loadUserSuccess$ } from "./user.action";
import { mergeMap,map,tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class UserEffects{

  private url:string = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){

  }

  loadUser$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadUser$),
      mergeMap((actions:any)=> this.http.get(this.url +'user')
      .pipe(
        map((res:any)=> loadUserSuccess$({user:res.users}))
      )
      )
    )
  )

  addUser$ = createEffect(()=>
    this.actions.pipe(
      ofType(addUser$),
      mergeMap((actions:any)=> this.http.post(this.url + 'user',actions.user)
      .pipe(
        map((res:any)=> addUserSuccess$({user:res.user}))
      ))
    )
  )

  editUser$ = createEffect(()=>
    this.actions.pipe(
      ofType(editUser$),
      mergeMap((actions:any)=> this.http.put(this.url + `user/${actions.id}`,actions.user)
      .pipe(
        map((res:any)=> editUserSuccess$({user:res.user,id:res.user.id}))
      ))
    )
  )

  deleteUser$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteUser$),
      mergeMap((actions:any)=> this.http.delete(this.url + `user/${actions.id}`)
      .pipe(
        map((res:any)=> deleteUserSuccess$({user:res.user,id:actions.id}))
      ))
    )
  )
}
