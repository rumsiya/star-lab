import { createAction, props } from "@ngrx/store";
import { Report } from "./report.models";

export const loadReport$ = createAction('[report] load reports');
export const loadReportSuccess$ = createAction('[report] load report success',props<{report:Report[]}>())

export const editReport$ = createAction('[report] edit report',props<{report:Report,id:number}>());
export const editReportSuccess$ = createAction('[report] edit report success',props<{report:Report,id:number}>());

export const deleteReport$ = createAction('[report] delete report',props<{report:Report,id:number}>());
export const deleteReportSuccess$ = createAction('[report] delete report success',props<{report:Report,id:number}>());


