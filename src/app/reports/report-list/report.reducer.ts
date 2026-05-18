import { createReducer, on } from "@ngrx/store";
import { Report } from "./report.models";
import { deleteReportSuccess$, editReportSuccess$, loadReportSuccess$ } from "./report.action";


export interface ReportState{
  report:Report[];
}

export const initialReportState:ReportState ={
  report:[]
}

export const reportReducer = createReducer(
  initialReportState,
  on(loadReportSuccess$,(state,{report})=>({
      ...state,
      report:report
    })
  ),

  on(editReportSuccess$,(state,{report,id})=>({
      ...state,
      report:[...state.report.map((u,i)=>u.id==id?report:u)]
    })
  ),
  on(deleteReportSuccess$,(state,{report,id})=>({
      ...state,
      report:[...state.report.filter((u,_)=>u.id!==id)]
    })
  )

)
