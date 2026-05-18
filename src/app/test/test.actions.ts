import { createAction, props } from "@ngrx/store";
import { Test } from "./test.models";

export const loadTest$ = createAction('[test] load tests');
export const loadTestSuccess$ = createAction('[test] load test success',props<{test:Test[]}>())

export const addTest$ = createAction('[test] add test',props<{test:Test}>());
export const addTestSuccess$ = createAction('[test] add test success',props<{test:Test}>());

export const editTest$ = createAction('[test] edit test',props<{test:Test,id:number}>());
export const editTestSuccess$ = createAction('[test] edit test success',props<{test:Test,id:number}>());

export const deleteTest$ = createAction('[test] delete test',props<{test:Test,id:number}>());
export const deleteTestSuccess$ = createAction('[test] delete test success',props<{test:Test,id:number}>());


