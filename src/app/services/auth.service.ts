import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private url :string = environment.apiUrl

  constructor(
    private http:HttpClient
  ) {
     const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  register(data:any){
    return this.http.post( this.url +'register',data);

  }

  login(data:any){
    return this.http.post( this.url +'login',data);

  }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token:string){
    localStorage.setItem('token',token)
  }

  setUser(user:any){
    this.userSubject.next(user)
    localStorage.setItem('user',JSON.stringify(user))
  }

  isLoggedIn():any{
    console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

  getRole():any{
    const data = JSON.parse(localStorage.getItem('user')!);
    const role = data.role;
    if(role == 1 || role == 2){
      return true;
    }else{
      return false;
    }
  }

  logout(){
     localStorage.removeItem('user')
     localStorage.removeItem('token')

  }

  isAdmin(){
    const user= localStorage.getItem('user')!;
    const role = JSON.parse(user).role
    if(role == 1){
      return true;
    }else{
      return false
    }
  }

  isStaff(){
    const user= localStorage.getItem('user')!;
    const role = JSON.parse(user).role
    if(role == 1 || role==2){
      return true;
    }else{
      return false
    }
  }

  isPatient(){
    const user= localStorage.getItem('user')!;
    const role = JSON.parse(user).role
    if(role == 3){
      return true;
    }else{
      return false
    }
  }
}
