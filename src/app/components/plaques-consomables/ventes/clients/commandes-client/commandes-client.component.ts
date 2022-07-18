import {Component, Input, OnInit} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-commandes-client',
  templateUrl: './commandes-client.component.html',
  styleUrls: ['./commandes-client.component.css']
})
export class CommandesClientComponent implements OnInit {
  commandes: any;
  client:any;
  @Input() url:string='';

  constructor(private pcService:PlaquesConsommablesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    /*console.log(url);*/
    this.onGetClient(atob(this.url));
  }

  onGetClient(url:string){
    this.pcService.getResources(url).subscribe(data=>{
      this.client=data;
      this.onGetCommandesForClient(this.client);
      console.log(this.client);
    })
  }

  onGetCommandesForClient(client:any){
    this.pcService.getResources(client._links.commandes.href).subscribe(data=>{
      client.commandes=data;
      /*data.commandes._embedded.commandes.forEach((commande:any)=>{
        this.onGetCommercialForCommande(commande);
      });*/
      this.onGetCommercialForEachCmd(client.commandes);
    });
  }

  onGetCommercialForEachCmd(commandes:any){
    commandes._embedded.commandes.forEach((commande:any)=>{
      this.onGetCommercialForCommande(commande);
    });
  }

  onGetCommercialForCommande(commande:any){
    this.pcService.getResources(commande._links.commercial.href).subscribe(data=>{
      commande.commercial=data;
    });
  }

  detail(commande: any) {

  }
}
