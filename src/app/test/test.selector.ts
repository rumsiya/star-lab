import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TestState } from "./test.reducer";


export const selectInitial = createFeatureSelector<TestState>('tests');
export const selectTest = createSelector(
  selectInitial,
  state=>state.test
)
