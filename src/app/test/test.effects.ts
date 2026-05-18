import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTest$, addTestSuccess$, deleteTest$, deleteTestSuccess$, editTest$, editTestSuccess$, loadTest$, loadTestSuccess$ } from "./test.actions";
import { mergeMap,map,tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class testEffects{

  private url:string = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http:HttpClient,
    private snackBar:MatSnackBar
  ){

  }

  loadtest$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadTest$),
      mergeMap((actions:any)=> this.http.get(this.url +'test')
      .pipe(
        map((res:any)=> loadTestSuccess$({test:res.tests}))
      )
      )
    )
  )

  addtest$ = createEffect(()=>
    this.actions.pipe(
      ofType(addTest$),
      mergeMap((actions:any)=> this.http.post(this.url + 'test',actions.test)
      .pipe(
        map((res:any)=> addTestSuccess$({test:res.test}))
      ))
    )
  )

  edittest$ = createEffect(()=>
    this.actions.pipe(
      ofType(editTest$),
      mergeMap((actions:any)=> this.http.put(this.url + `test/${actions.id}`,actions.test)
      .pipe(
        map((res:any)=> editTestSuccess$({test:res.test,id:res.test.id}))
      ))
    )
  )

  deletetest$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteTest$),
      mergeMap((actions:any)=> this.http.delete(this.url + `test/${actions.id}`)
      .pipe(
        map((res:any)=> deleteTestSuccess$({test:res.test,id:actions.id}))
      ))
    )
  )

  deleteTestSuccessMessage$ =createEffect(()=>
    this.actions.pipe(
      ofType(deleteTestSuccess$),
      tap(()=> this.snackBar.open('successfully deleted','close',{ duration: 3000 }))
    ),
    {dispatch:false}
  )


}
