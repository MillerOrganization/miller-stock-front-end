import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {CaddyService} from "../../../../../services/caddy.service";

@Component({
  selector: 'app-consomables-ventes',
  templateUrl: './consomables-ventes.component.html',
  styleUrls: ['./consomables-ventes.component.css']
})
export class ConsomablesVentesComponent implements OnInit {
  consomables: any;
  quantities:number[]=new Array(10);
  caddy:Object|null=null;
  constructor(private pcService:PlaquesConsommablesService,
              public caddyService:CaddyService) { }

  ngOnInit(): void {
    this.getConsomables();
    this.caddy=this.caddyService.getCaddy();
    /*this.caddyService.isConsomableInCaddy(this.consomables);*/
    /*console.log(this.consomables);*/
  }

  getConsomables(){
    this.pcService.getResources(environment.host+"/consomables").subscribe(data=>{
      this.consomables=data;

      this.getListConsomableForEachConsomable(this.consomables._embedded.consomables);
      /*console.log(data);*/
    });
  }
  getListConsomableForEachConsomable(consomables:any[]){
    consomables.forEach((consomable:any)=>{
      this.getListConsomableForConsomable(consomable);
    });
  }

  getListConsomableForConsomable(consomable:any){
    this.pcService.getResources(consomable._links.listConsomable.href).subscribe(data=>{
      /*console.log(data);*/
      consomable.listConsomable=data;
      this.getCategorieForListConsomable(consomable.listConsomable);
    });
  }

  getCategorieForListConsomable(listConsomable:any){
    this.pcService.getResources(listConsomable._links.categorie.href).subscribe(cat=>{
      /*console.log(cat);*/
      listConsomable.categorie=cat;
    });
  }

  addToCart(consomable: any,f:any) {

    let lc={
      consomable:consomable,
      quantite:f.quantite
    }
    // @ts-ignore
    this.caddy?.consomables.push(lc);
     // @ts-ignore
    this.caddyService.putCaddy(this.caddy);
    console.log(this.caddy);

  }

}
