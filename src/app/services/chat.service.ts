import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url:string = environment.apiUrl;

  constructor(
    private http: HttpClient

  ) { }

  sendMessage(message:any){
    console.log(message);
    return this.http.post(this.url +'chat',{
      message:message
    });
  }

}
