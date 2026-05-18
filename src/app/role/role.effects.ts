import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addRole$, addRoleSuccess$, deleteRole$, deleteRoleSuccess$, editRole$, editRoleSuccess$, loadRole$, loadRoleSuccess$ } from "./role.actions";
import { mergeMap,map,tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class roleEffects{

  private url:string = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){

  }

  loadrole$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadRole$),
      mergeMap((actions:any)=> this.http.get(this.url +'role')
      .pipe(
        map((res:any)=> loadRoleSuccess$({role:res.roles}))
      )
      )
    )
  )

  addrole$ = createEffect(()=>
    this.actions.pipe(
      ofType(addRole$),
      mergeMap((actions:any)=> this.http.post(this.url + 'role',actions.role)
      .pipe(
        map((res:any)=> addRoleSuccess$({role:res.role}))
      ))
    )
  )

  editrole$ = createEffect(()=>
    this.actions.pipe(
      ofType(editRole$),
      mergeMap((actions:any)=> this.http.put(this.url + `role/${actions.id}`,actions.role)
      .pipe(
        map((res:any)=> editRoleSuccess$({role:res.role,id:res.role.id}))
      ))
    )
  )

  deleterole$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteRole$),
      mergeMap((actions:any)=> this.http.delete(this.url + `role/${actions.id}`)
      .pipe(
        map((res:any)=> deleteRoleSuccess$({role:res.role,id:actions.id}))
      ))
    )
  )
}
