import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthUserService} from "../../../services/auth-user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
              public authService:AuthUserService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('authenticate');
  }
}
