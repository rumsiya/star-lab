import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url:string = environment.apiUrl

  constructor(
    private http:HttpClient
  ) { }

  addReport(data:any){
    return this.http.post(this.url +'reports',data);

  }

  download(id:number){
    return this.http.get(this.url +`report-generate/${id}`,    { responseType: 'blob' }
)
  }
}
