import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthUserService} from "../../../../../services/auth-user.service";

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
              private router:Router,
              private authService:AuthUserService) { }

  ngOnInit(): void {
    this.idPlaque=parseInt(this.activatedRoute.snapshot.params?.['idPlaque']);
    this.onGetPlaque();

  }

  onGetUser(){
    this.pcService.getResources(environment.host+"/utilisateurs/search/byUsername?username="+
    this.authService.getUsernameFromToken())
      .subscribe(data=>{
      this.user=data;
      console.log(this.user);
        this.consommerPlaqueFromGroup=this.fb.group({
          plaque:[environment.host+"/plaques/"+this.idPlaque],
          utilisateur:[this.user?._links.self.href],
          quantite:[1,Validators.required]
        });
        console.log(this.consommerPlaqueFromGroup.value);
    })
  }

  onGetPlaque(){
    this.pcService.getResources(environment.host+"/plaque/"+this.idPlaque).subscribe(
    data=>{
      this.plaque=data;
      console.log(this.plaque);
      this.onGetUser();
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
