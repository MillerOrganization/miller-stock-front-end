import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-consommer-plaque',
  templateUrl: './consommer-plaque.component.html',
  styleUrls: ['./consommer-plaque.component.css']
})
export class ConsommerPlaqueComponent implements OnInit {
  idUser?: number;
  idPlaque?: number;
  plaque: any;
  user: any;
  isReady:boolean=false;
  consommerPlaqueFromGroup?: FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
              private pcService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.idUser=parseInt(this.activatedRoute.snapshot.params?.['idUser']);
    this.idPlaque=parseInt(this.activatedRoute.snapshot.params?.['idPlaque']);
    this.onGetPlaque()

  }

  onGetPlaque(){
    this.pcService.getResources(environment.host+"/plaque/"+this.idPlaque).subscribe(
    data=>{
      this.plaque=data;
      console.log(this.plaque);
        this.consommerPlaqueFromGroup=this.fb.group({
          plaque:[environment.host+"/plaques/"+this.idPlaque],
          utilisateur:[environment.host+"/utilisateurs/"+this.idUser],
          quantite:[1,Validators.required]
        });
      }
    );
  }

  consommer() {
    let quantite=this.plaque.quantite-this.consommerPlaqueFromGroup?.value.quantite;
    if(quantite>=0){
      this.plaque.quantite=quantite;
      this.pcService.newResource(environment.host+"/utilisateurPlaques",this.consommerPlaqueFromGroup?.value)
        .subscribe(data=>{
          this.pcService.updateResource(environment.host+"/plaque",this.plaque).subscribe(data=>{
            alert("yes");
            /!*this.router.navigateByUrl("plaques");*!/
          });
        });
    }else {
      alert('impossible de consommer cette quantite');
    }
  }

  utiliser() {
    this.isReady=true;
  }
}
