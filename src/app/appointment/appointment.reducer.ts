import { createReducer, on } from "@ngrx/store";
import { Appointment } from "./appointment.model";
import { addAppointment$, addAppointmentSuccess$, deleteAppointmentSuccess$, editAppointmentSuccess$, loadAppointmentSuccess$ } from "./appointment.actions";


export interface AppointmentState{
  appointment:Appointment[];
}

export const initialAppointmentState:AppointmentState ={
  appointment:[]
}

export const appointmentReducer = createReducer(
  initialAppointmentState,
  on(loadAppointmentSuccess$,(state,{appointment})=>({
      ...state,
      appointment:appointment
    })
  ),
  on(addAppointmentSuccess$,(state,{appointment})=>({
      ...state,
      appointment:[...state.appointment,appointment]
    })
  ),
  on(editAppointmentSuccess$,(state,{appointment,id})=>({
      ...state,
      appointment:[...state.appointment.map((u,i)=>u.id==id?appointment:u)]
    })
  ),
  on(deleteAppointmentSuccess$,(state,{appointment,id})=>({
      ...state,
      appointment:[...state.appointment.filter((u,_)=>u.id!==id)]
    })
  )

)
