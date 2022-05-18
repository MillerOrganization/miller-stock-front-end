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
  consommerPlaqueFromGroup?: FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
              private pcService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.idUser=parseInt(this.activatedRoute.snapshot.params?.['idUser']);
    this.idPlaque=parseInt(this.activatedRoute.snapshot.params?.['idPlaque']);
    this.pcService.getResources(environment.host+"/plaques/"+this.idPlaque).subscribe(
      data=>{
        this.plaque=data;
        console.log(this.plaque);
        this.pcService.getResources(environment.host+"/utilisateurs/"+this.idUser).subscribe(data=>{
          this.user=data;
          console.log(this.user);
          this.consommerPlaqueFromGroup=this.fb.group({
            plaque:[environment.host+"/plaques/"+this.idPlaque],
            utilisateur:[this.user?._links.self.href],
            quantite:[1,Validators.required]
          });
        });
      }
    );


  }

  consommer() {
    this.pcService.newResource(environment.host+"/utilisateurPlaques",this.consommerPlaqueFromGroup?.value)
      .subscribe(data=>{
        this.plaque.quantite-=this.consommerPlaqueFromGroup?.value.quantite;
        this.pcService.updateResourceByPatch(this.consommerPlaqueFromGroup?.value.plaque,this.plaque).subscribe(data=>{
          alert("yes");
          this.router.navigateByUrl("plaques");
        });
      });
  }
}
