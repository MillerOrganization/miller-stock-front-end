import {Component, Input, OnInit} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-plaques-used',
  templateUrl: './plaques-used.component.html',
  styleUrls: ['./plaques-used.component.css']
})
export class PlaquesUsedComponent implements OnInit {

  @Input() user:any;
  plaques:any[]=[];
  utilisateurPlaques: any;
  constructor(private pcService:PlaquesConsommablesService) { }

  getPlaquesOfUser(){
    this.pcService.getResources(this.user._links.utilisateurPlaques.href).subscribe(data=>{
      /*console.log(data);*/
      this.getPlaquesFromPlaquesUtilisateur(data);
      this.utilisateurPlaques=data;
    });
  }

  getPlaquesFromPlaquesUtilisateur(utilisateusPlaques:any){
    utilisateusPlaques._embedded.utilisateurPlaques.forEach((plaqueUtilisateur:any)=>{
      this.pcService.getResources(plaqueUtilisateur._links.plaque.href).subscribe(plaque=>{
        this.getListPlaqueOfPlaque(plaque);
        plaqueUtilisateur.plaque=plaque;
        console.log(plaque);
      });
    });
  }

  getListPlaqueOfPlaque(plaque:any){
    this.pcService.getResources(environment.host+"/plaques/"+plaque.id+"/listPlaques").subscribe(listPlaque=>{
      //console.log(listPlaque);
      this.getGroupArticleOfPLaque(listPlaque);
      plaque.listPlaques=listPlaque;
    });
  }

  getGroupArticleOfPLaque(listPlaque:any){
    this.pcService.getResources(listPlaque._links.groupeArticle.href).subscribe(ga=>{
      listPlaque.groupeArticle=ga;
    });
  }

  ngOnInit(): void {
    this.getPlaquesOfUser();

  }

}
