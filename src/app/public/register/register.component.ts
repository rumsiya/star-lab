import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData :any ={
    username:'',
    email:'',
    password:'',
    cpass:'',
    age:0,
    gender:0,
    phone:''
  }
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  register(form:any){
    if(form.valid){
      this.authService.register(this.registerData).subscribe((res:any)=>{
        if(res.success){
          this.authService.setToken(res.token)
          this.router.navigateByUrl("/dashboard");
        }else{
          this.router.navigateByUrl("/");
        }
      })
    }
  }
}
