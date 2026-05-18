import { createReducer, on } from "@ngrx/store";
import { AppointmentTest } from "./appointment-test.models";
import { deleteAppointmentTestSuccess$, viewAppointmentTestSuccess$ } from "./appointment-test.actions";
import { Appointment } from "../appointment/appointment.model";


export interface AppointmentTestState{
  appointmentTest:AppointmentTest[];
  appointment:Appointment|null;
}

export const initialAppointmentTestState:AppointmentTestState ={
  appointmentTest:[],
  appointment:null
}

export const appointmentTestReducer = createReducer(
  initialAppointmentTestState,
  on(viewAppointmentTestSuccess$,(state,{appointmentTest,appointment})=>({
      ...state,
      appointmentTest:appointmentTest,
      appointment:appointment
    })
  ),
  on(deleteAppointmentTestSuccess$,(state,{appointmentTest,id})=>({
      ...state,
      appointmentTest:[...state.appointmentTest.filter((a,_)=>a.id !==id)]
    })
  )

)
