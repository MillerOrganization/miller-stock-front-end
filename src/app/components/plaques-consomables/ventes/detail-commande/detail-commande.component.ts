import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})

export class DetailCommandeComponent implements OnInit {

  /*url?:string;*/
  commande: any;
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
    let url=atob(this.activatedRoute.snapshot.params?.['url']);
    this.getCommande(url);

  }

  getCommande(url:string){
    this.pcService.getResources(url).subscribe(commande=>{
      this.commande=commande;
      this.getClientForCommande(commande);
      this.onGetCommercialForCommande(commande);
      this.onGetLignesCommande(commande);
    });
  }


  getClientForCommande(commande:any){
      /*console.log(commande._links.client.href);*/
      this.pcService.getResources(commande._links.client.href).subscribe(data=>{
        commande.client=data;
      });
  }

  onGetCommercialForCommande(commande:any){
    this.pcService.getResources(commande._links.commercial.href).subscribe(data=>{
      commande.commercial=data;
    });
  }

  onGetLignesCommande(commande:any){
    this.pcService.getResources(environment.host+"/ligneCommandes/search/byCommande?commande="+commande.id).
    subscribe(data=>{
      commande.ligneCommandes=data;
      this.onGeteConsommableforEachLigneCommande(data);
      console.log(this.commande);
    });
  }

  onGeteConsommableforEachLigneCommande(lignesCommandes:any){
    lignesCommandes._embedded.ligneCommandes.forEach((lc:any)=>{
      console.log(lc._links.consomable.href);
      this.getConsomable(lc);
    });
  }
  getConsomable(lc:any){
    this.pcService.getResources(lc._links.consomable.href).subscribe(data=>{
      this.getListConsomableForConsomable(data);
      lc.consomable=data;
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

}
