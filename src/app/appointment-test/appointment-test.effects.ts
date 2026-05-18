import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteAppointmentTest$, deleteAppointmentTestSuccess$, viewAppointmentTest$, viewAppointmentTestSuccess$ } from "./appointment-test.actions";
import { mergeMap,map } from 'rxjs/operators'
import { environment } from "src/environments/environment.prod";
import { loadAppointmentSuccess$ } from "../appointment/appointment.actions";


@Injectable()
export class AppointmentTestEffects{
  private url:string = environment.apiUrl
  constructor(
    private http:HttpClient,
    private actions:Actions
  ){

  }

  loadAppointementT$ = createEffect(()=>
    this.actions.pipe(
      ofType(viewAppointmentTest$),
      mergeMap((actions:any)=> this.http.get(this.url + `appointment-test/${actions.id}`)
      .pipe(
        map((res:any) =>viewAppointmentTestSuccess$({appointmentTest:res.appointment_test,appointment:res.appointment}))
      )
      )
    )
  )

  deleteAppointmentT$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteAppointmentTest$),
      mergeMap((actions:any)=> this.http.delete(this.url + `appointment-test/${actions.id}`)
      .pipe(
        map((res:any) =>deleteAppointmentTestSuccess$({appointmentTest:res.appointment_test,id:actions.id}))
      )
      )
    )
  )

}
