import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-chute',
  templateUrl: './new-chute.component.html',
  styleUrls: ['./new-chute.component.css']
})
export class NewChuteComponent implements OnInit {
  groupesArticle: any;
  listPlaques: any;
  private plaque: any;

  constructor(private pcService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupesArticle=data;
      console.log(this.groupesArticle);
    });
    this.pcService.getResources(environment.host+"/listPlaqueses").subscribe(data=>{
      this.listPlaques=data;
    });
  }

  addPlaque(f:NgForm,plaque:any){
    if(plaque!=null){
      const p= {
        id:plaque.id,
        listPlaques:{id:f.value.listPlaques},
        type:"chute",
        longueur:f.value.longueur,
        largeur:f.value.largeur,
        quantite:f.value.quantite+plaque.quantite
      }
      this.pcService.updateResource(environment.host+"/plaque/",p).subscribe(data=>{
        alert("added succesfully");
        this.router.navigateByUrl("plaques");
      });
    }else {
      const p = {
        listPlaques:{id:f.value.listPlaques},
        type:"chute",
        longueur:f.value.longueur,
        largeur:f.value.largeur,
        quantite:f.value.quantite
      }

      this.pcService.newResource(environment.host+"/plaque/",p).subscribe(data=>{
        alert("added succesfully");
        this.router.navigateByUrl("plaques");
      });
    }
  }

  onAddPlaque(f: NgForm) {
    this.pcService.getResources(environment.host+"/plaque/findChute?listPlaques="+f.value.listPlaques+
      "&longueur="+f.value.longueur+"&largeur="+f.value.largeur
    ).subscribe(data=>{
      this.plaque=data;
      console.log(data);
      this.addPlaque(f,this.plaque);
    });

    /*const plaque = {
      listPlaques:{id:f.value.listPlaques},
      type:"chute",
      longueur:f.value.longueur,
      largeur:f.value.largeur,
      quantite:f.value.quantite
    }

    this.pcService.newResource(environment.host+"/plaque/",plaque).subscribe(data=>{
      alert("added succesfully");
      this.router.navigateByUrl("plaques");
    });*/
  }
}
