import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addAppointment$, addAppointmentSuccess$, deleteAppointment$, deleteAppointmentSuccess$, editAppointment$, editAppointmentSuccess$, loadAppointment$, loadAppointmentSuccess$ } from "./appointment.actions";
import { mergeMap,map,tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class appointmentEffects{

  private url:string = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){

  }

  loadappointment$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadAppointment$),
      mergeMap((actions:any)=> this.http.get(this.url +'appointment')
      .pipe(
        map((res:any)=> loadAppointmentSuccess$({appointment:res.appointment}))
      )
      )
    )
  )

  addappointment$ = createEffect(()=>
    this.actions.pipe(
      ofType(addAppointment$),
      mergeMap((actions:any)=> this.http.post(this.url + 'appointment',actions.appointment)
      .pipe(
        map((res:any)=> addAppointmentSuccess$({appointment:res.appointment}))
      ))
    )
  )

  editappointment$ = createEffect(()=>
    this.actions.pipe(
      ofType(editAppointment$),
      mergeMap((actions:any)=> this.http.put(this.url + `appointment/${actions.id}`,actions.appointment)
      .pipe(
        map((res:any)=> editAppointmentSuccess$({appointment:res.appointment,id:res.appointment.id}))
      ))
    )
  )

  deleteappointment$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteAppointment$),
      mergeMap((actions:any)=> this.http.delete(this.url + `appointment/${actions.id}`)
      .pipe(
        map((res:any)=> deleteAppointmentSuccess$({appointment:res.appointment,id:actions.id}))
      ))
    )
  )
}
