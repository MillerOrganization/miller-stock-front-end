import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-plaque2',
  templateUrl: './edit-plaque2.component.html',
  styleUrls: ['./edit-plaque2.component.css']
})
export class EditPlaque2Component implements OnInit {
  groupesArticle: any;
  taillePlaques: any;
  id: number;
  plaque: any;

  constructor(private pcService:PlaquesConsommablesService,
  private activatedRoute:ActivatedRoute,
  private router:Router) {
    this.id=activatedRoute.snapshot.params?.['id'];
    console.log(this.id);
  }

  ngOnInit(): void {
    this.pcService.getResources(environment.host+"/plaque/"+this.id).subscribe(data=>{
      this.plaque=data;
      console.log(this.plaque);
    });
    this.pcService.getResources(environment.host+"/taillePlaques").subscribe(data=>{
      this.taillePlaques=data;
    });
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupesArticle=data;
      console.log(this.groupesArticle);
    });
  }

  createRequest(f:NgForm):any{
    if(f.value.type==='chute'){
      return {
        id:f.value.id,
        numeroArticle:f.value.numeroArticle,
        designation:f.value.designation,
        groupeArticle:{id:f.value.groupeArticle},
        type:f.value.type,
        longueur:f.value.longueur,
        largeur:f.value.largeur,
        quantite:f.value.quantite,
        quantiteMoisPrecedent:f.value.quantiteMoisPrecedent
      };
    }else
    return {
      id:f.value.id,
      numeroArticle:f.value.numeroArticle,
      designation:f.value.designation,
      groupeArticle:{id:f.value.groupeArticle},
      type:f.value.type,
      taille:{id:f.value.taille},
      quantite:f.value.quantite,
      quantiteMoisPrecedent:f.value.quantiteMoisPrecedent
    };
  }

  onUpdatePlaque(f: NgForm) {
    const plaque=this.createRequest(f);
    console.log(plaque);
    this.pcService.updateResource(environment.host+"/plaque/",plaque).subscribe(data=>{
      alert("updated succesfully");
      this.router.navigateByUrl("plaques");
    });

  }
}
