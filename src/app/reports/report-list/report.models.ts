export interface Report{
  id?:number;
  appointment_id?:number;
  test_id?:number;
  min_result?:number;
  max_result?:number;
  description?:string;
  unit_id?:number;
  result_file?:string;
}
