import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthUserService} from "../../../../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private authService:AuthUserService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated())
      this.router.navigateByUrl('');
  }

  login(f:NgForm){
    let user=new URLSearchParams();
    user.set("username",f.value.username)
    user.set("password",f.value.password)
    this.authService.login(user).subscribe(data=>{
      localStorage.setItem("token",data?.['access-token']);
      this.router.navigateByUrl('');
      /*console.log(this.authService.getDuration());*/
      setTimeout(()=>{
        localStorage.clear();
        this.router.navigateByUrl('authenticate');
      },this.authService.getDuration());
    });
  }

}
