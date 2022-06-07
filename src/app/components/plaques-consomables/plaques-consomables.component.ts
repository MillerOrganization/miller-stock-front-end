import { Component, OnInit } from '@angular/core';
import {AuthUserService} from "../../../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plaques-consomables',
  templateUrl: './plaques-consomables.component.html',
  styleUrls: ['./plaques-consomables.component.css']
})
export class PlaquesConsomablesComponent implements OnInit {
  constructor(public authService:AuthUserService,
              private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
      this.router.navigateByUrl('authenticate');

  }

}
