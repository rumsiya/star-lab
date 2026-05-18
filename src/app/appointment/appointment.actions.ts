import { createAction, props } from "@ngrx/store";
import { Appointment } from "./appointment.model";

export const loadAppointment$ = createAction('[appointment] load appointments');
export const loadAppointmentSuccess$ = createAction('[appointment] load appointment success',props<{appointment:Appointment[]}>())

export const addAppointment$ = createAction('[appointment] add appointment',props<{appointment:Appointment}>());
export const addAppointmentSuccess$ = createAction('[appointment] add appointment success',props<{appointment:Appointment}>());

export const editAppointment$ = createAction('[appointment] edit appointment',props<{appointment:Appointment,id:number}>());
export const editAppointmentSuccess$ = createAction('[appointment] edit appointment success',props<{appointment:Appointment,id:number}>());

export const deleteAppointment$ = createAction('[appointment] delete appointment',props<{appointment:Appointment,id:number}>());
export const deleteAppointmentSuccess$ = createAction('[appointment] delete appointment success',props<{appointment:Appointment,id:number}>());


