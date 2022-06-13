import {Component, Input, OnInit} from '@angular/core';
import {CaddyService} from "../../../../../services/caddy.service";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  client:any;
  caddy:any;
  @Input() commercial:any;
  constructor(public caddyService:CaddyService,
              private pcService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.caddy=this.caddyService.getCaddy();
    this.getClient();
    console.log(this.caddy);
    console.log(this.commercial);
  }

  getConsomables(){
    // @ts-ignore
    this.consomables=this.caddy.consomables;
  }

  getClient(){
    // @ts-ignore
    this.pcService.getResources(this.caddy.client).subscribe(data=>{
      this.client=data;
    });
  }

  cancel() {

  }

  finishCart(){
    localStorage.removeItem('caddy');
    this.router.navigateByUrl('ventes').then(()=> {
      window.location.reload();
    });
  }

  saveOrder() {
    let commande={
      client:this.caddy.client,
      commercial:this.commercial._links.self.href
    }
    console.log(commande);
    this.save(commande);
    /*this.saveOrderLines();*/
  }

  save(commande:any){
    this.pcService.newResource(environment.host+'/commandes',commande).subscribe(data=>{
      console.log(data);
      this.saveOrderLines(data);
      alert('commande ajoutée');
      this.finishCart();
    });
  }

  saveOrderLines(commande:any){
    this.caddy.consomables.forEach((consomable:any)=>{
      consomable.consomable.quantite-=consomable.quantite;
      if(consomable.consomable.quantite>=0){
        let lo= {
          consomable:consomable.consomable._links.self.href,
          commande:commande._links.self.href,
          quantite:consomable.quantite
        }
        this.pcService.updateResource(consomable.consomable._links.self.href,consomable.consomable).subscribe(c=>{
          this.pcService.newResource(environment.host+"/ligneCommandes",lo).subscribe(data=>{

          });
        });
        console.log(lo);

      }else alert("impossible d'ajouter cette quantite");
    });

  }
}
