import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {AuthUserService} from "../../../../services/auth-user.service";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
  clickedItem: string="commandes";
  commercial:any;

  constructor(private pcService:PlaquesConsommablesService,
              private authService:AuthUserService) { }

  ngOnInit(): void {
    this.getCommercial();
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
}
