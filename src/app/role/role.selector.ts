import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoleState } from "./role.reducer";


export const selectInitial = createFeatureSelector<RoleState>('roles');
export const selectRole = createSelector(
  selectInitial,
  state=>state.role
)
