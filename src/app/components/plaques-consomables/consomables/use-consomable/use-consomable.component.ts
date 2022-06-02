import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-use-consomable',
  templateUrl: './use-consomable.component.html',
  styleUrls: ['./use-consomable.component.css']
})
export class UseConsomableComponent implements OnInit {
  urlConsomable:string="";
  consomable: any;
  isReady:boolean=false;
  useConsomableFormGroup:any;
  constructor(private activatedRoute:ActivatedRoute,
              private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.urlConsomable=atob(this.activatedRoute.snapshot.params?.['url']);
    this.onGetConsomable();

  }

  onGetConsomable(){
    this.pcService.getResources(this.urlConsomable).subscribe(data=>{
      this.consomable=data;
      this.getListConsomableForConsomable(this.consomable);
      this.useConsomableFormGroup=this.fb.group({
        utilisateur:environment.host+"/utilisateurs/1",
        consomable:this.consomable._links.self.href,
        quantite:[1,Validators.required]
      })
    });
  }

  getListConsomableForConsomable(consomable:any){
    this.pcService.getResources(consomable._links.listConsomable.href).subscribe(data=>{
      console.log(data);
      consomable.listConsomable=data;
      this.getCategorieForListConsomable(consomable.listConsomable);
    });
  }

  getCategorieForListConsomable(listConsomable:any){
    this.pcService.getResources(listConsomable._links.categorie.href).subscribe(cat=>{
      console.log(cat);
      listConsomable.categorie=cat;
    });
  }

  consomableReady() {
    this.isReady=true;
  }

  onUseConsomable() {
    let consomable=JSON.parse(JSON.stringify(this.consomable));
    consomable.quantite-=this.useConsomableFormGroup?.value.quantite;
    if(consomable.quantite>=0)
      this.useConsomable(consomable);

    else alert('impossible de consommer cette quantite');

  }

  useConsomable(consomable:any){
    this.pcService.newResource(environment.host+"/utilisateurConsomables",this.useConsomableFormGroup.value)
      .subscribe(data=>{
        this.updateConsomable(consomable);
      });
  }

  updateConsomable(consomable:any){
    this.pcService.updateResource(this.urlConsomable,consomable).subscribe(data=>{
      alert('vous utilisé le consomable');
      this.isReady=false;
      this.onGetConsomable();
    });
  }
}