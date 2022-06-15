import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toutes-commandes',
  templateUrl: './toutes-commandes.component.html',
  styleUrls: ['./toutes-commandes.component.css']
})
export class ToutesCommandesComponent implements OnInit {
  commandes: any;

  constructor(private pcService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetCommandes();
  }
  onGetCommandes(){
    this.pcService.getResources(environment.host+"/commandes")
      .subscribe(data=>{
        this.commandes=data;
        console.log(this.commandes);
        this.getClientForCommandes(this.commandes);
      });
  }

  getClientForCommandes(commandes:any){
    commandes._embedded.commandes.forEach((commande:any)=>{
      /*console.log(commande._links.client.href);*/
      this.pcService.getResources(commande._links.client.href).subscribe(data=>{
        commande.client=data;
        this.onGetCommercialForCommande(commande);
      });
    });
  }

  onGetCommercialForCommande(commande:any){
    this.pcService.getResources(commande._links.commercial.href).subscribe(data=>{
      commande.commercial=data;
    });
  }

  detail(commande: any) {
    let url=btoa(commande._links.self.href);
    this.router.navigateByUrl("detail-commande/"+url);
  }

}
