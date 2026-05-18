import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData:any ={
    email:'',
    password:''
  }
  constructor(
    private authService:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  login(form:any){
    if(form.valid){
      this.authService.login(this.loginData).subscribe((res:any)=>{
        if(res.success){
          this.authService.setToken(res.token)
          this.route.navigateByUrl('/dashboard')
          this.authService.setUser(res.user);

        }else{
          this.route.navigateByUrl('/login')

        }
      })
    }
  }

}
