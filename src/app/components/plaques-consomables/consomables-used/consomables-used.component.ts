import {Component, Input, OnInit} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";

@Component({
  selector: 'app-consomables-used',
  templateUrl: './consomables-used.component.html',
  styleUrls: ['./consomables-used.component.css']
})
export class ConsomablesUsedComponent implements OnInit {
  utilisateurConsomables: any;
  @Input() user:any;

  constructor(private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
    this.getConsomablesOfUser();
  }

  getConsomablesOfUser(){
    this.pcService.getResources(this.user._links.utilisateurConsomables.href).subscribe(data=>{
      console.log(data);
      this.getConsomablesFromConsomablesUtilisateur(data);
      this.utilisateurConsomables=data;
    });
  }

  getConsomablesFromConsomablesUtilisateur(utilisateusConsomables:any){
    utilisateusConsomables._embedded.utilisateurConsomables.forEach((consomableUtilisateur:any)=>{
      this.pcService.getResources(consomableUtilisateur._links.consomable.href).subscribe(consomable=>{
        this.getListConsomableOfConsomable(consomable);
        consomableUtilisateur.consomable=consomable;
      });
    });
  }

  getListConsomableOfConsomable(consomable:any){
    this.pcService.getResources(consomable._links.listConsomable.href).subscribe(listConsomable=>{
      //console.log(listPlaque);
      this.getCategorieOfConsomable(listConsomable);
      consomable.listConsomable=listConsomable;
    });
  }

  getCategorieOfConsomable(listConsomable:any){
    this.pcService.getResources(listConsomable._links.categorie.href).subscribe(cat=>{
      listConsomable.categorie=cat;
    });
  }

}
