import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {AuthUserService} from "../../../../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
  clickedItem: string="commandes";
  commercial:any;
  urlCli:string='';

  constructor(private pcService:PlaquesConsommablesService,
              private authService:AuthUserService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated())
      this.getCommercial();
    else this.router.navigateByUrl('authenticate');

  }

  getCommercial(){
    this.pcService.getResources(environment.host+"/utilisateurs/search/byUsername?username="+
      this.authService.getUsernameFromToken())
      .subscribe(data=>{
        this.commercial=data;
      });
  }

  change(event: any) {
    this.clickedItem=event;
  }

  intercept(event: any) {
    this.urlCli=event.client;
    this.clickedItem=event.comp;
  }
}
