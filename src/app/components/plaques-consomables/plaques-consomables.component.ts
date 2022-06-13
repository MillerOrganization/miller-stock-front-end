import {Component, Input, OnInit} from '@angular/core';
import {AuthUserService} from "../../../services/auth-user.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {PlaquesConsommablesService} from "../../../services/plaques-consommables.service";

@Component({
  selector: 'app-plaques-consomables',
  templateUrl: './plaques-consomables.component.html',
  styleUrls: ['./plaques-consomables.component.css']
})
export class PlaquesConsomablesComponent implements OnInit {
  clikedItem: string='profile';
  user:any;
  constructor(public authService:AuthUserService,
              private router:Router,
              private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
      this.router.navigateByUrl('authenticate');
    else {
      this.pcService.getResources(environment.host+"/utilisateurs/search/byUsername?username="+
        this.authService.getUsernameFromToken())
        .subscribe(data=>{
          this.user=data;
        });
    }

  }

  change(event: any) {
    this.clikedItem=event;
  }
}
