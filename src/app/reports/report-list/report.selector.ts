import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReportState } from "./report.reducer";


export const selectInitial = createFeatureSelector<ReportState>('reports');
export const selectReport = createSelector(
  selectInitial,
  state=>state.report
)
