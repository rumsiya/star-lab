import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppointmentTestState } from "./appointment-test.reducer";


export const selectInitial = createFeatureSelector<AppointmentTestState>('appointmentTests');
export const selectAppointmentTest = createSelector(
  selectInitial,
  state=>state.appointmentTest
)

export const selectedAppointment = createSelector(
  selectInitial,
  state=>state.appointment
)
