import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin:boolean = false;
  isStaff : boolean = false;
  isPatient:boolean = false;
  constructor(
    private authService:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
   this.isAdmin = this.authService.isAdmin();
   this.isStaff = this.authService.isStaff();
   this.isPatient = this.authService.isPatient();
  }

  logout(){
    this.authService.logout();
    this.route.navigateByUrl("/")


  }

}
