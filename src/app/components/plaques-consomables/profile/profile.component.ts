import { Component, OnInit } from '@angular/core';
import {AuthUserService} from "../../../../services/auth-user.service";
import {environment} from "../../../../environments/environment";
import {Validators} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService:AuthUserService,
              private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
    this.pcService.getResources(environment.host+"/utilisateurs/search/byUsername?username="+
      this.authService.getUsernameFromToken())
      .subscribe(data=>{
        this.user=data;
        console.log(this.user);

      })
  }

}
