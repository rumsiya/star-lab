import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteReport$, deleteReportSuccess$, editReport$, editReportSuccess$, loadReport$, loadReportSuccess$ } from "./report.action";
import { mergeMap,map,tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class reportEffects{


  private url:string = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){

  }

  loadreport$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadReport$),
      mergeMap((actions:any)=> this.http.get(this.url +'reports')
      .pipe(
        map((res:any)=> loadReportSuccess$({report:res.reports}))
      )
      )
    )
  )


  editreport$ = createEffect(()=>
    this.actions.pipe(
      ofType(editReport$),
      mergeMap((actions:any)=> this.http.put(this.url + `reports/${actions.id}`,actions.report)
      .pipe(
        map((res:any)=> editReportSuccess$({report:res.report,id:res.report.id}))
      ))
    )
  )

  deletereport$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteReport$),
      mergeMap((actions:any)=> this.http.delete(this.url + `reports/${actions.id}`)
      .pipe(
        map((res:any)=> deleteReportSuccess$({report:res.report,id:actions.id}))
      ))
    )
  )
}
