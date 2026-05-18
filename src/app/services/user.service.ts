import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = environment.apiUrl;
  constructor(
    private http:HttpClient
  ) { }

  getUser(){
    return this.http.get(this.url +'user');
  }
}
