import { createAction, props } from "@ngrx/store";
import { AppointmentTest } from "./appointment-test.models";
import { Appointment } from "../appointment/appointment.model";


export const viewAppointmentTest$ = createAction('[Appointment Test] view appointment test',props<{id:number}>());
export const viewAppointmentTestSuccess$ = createAction('[Appointment Test] view appointment test success',props<{appointmentTest:AppointmentTest[],appointment:Appointment}>());

export const deleteAppointmentTest$ = createAction('[Appointment Test] delete appointment test',props<{appointmentTest:AppointmentTest,id:number}>());
export const deleteAppointmentTestSuccess$ = createAction('[Appointment Test success] delete appointment test success',props<{appointmentTest:AppointmentTest,id:number}>());

