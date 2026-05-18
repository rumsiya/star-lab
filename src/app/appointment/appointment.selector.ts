import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppointmentState } from "./appointment.reducer";


export const selectInitial = createFeatureSelector<AppointmentState>('appointments');
export const selectAppointment = createSelector(
  selectInitial,
  state=>state.appointment
)
