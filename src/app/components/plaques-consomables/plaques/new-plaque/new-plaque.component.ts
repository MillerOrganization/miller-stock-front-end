import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-plaque',
  templateUrl: './new-plaque.component.html',
  styleUrls: ['./new-plaque.component.css']
})
export class NewPlaqueComponent implements OnInit {
  groupesArticle: any;
  taillePlaques: any;
  listPlaques: any;
  plaque: any;

  constructor(private pcService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    this.pcService.getResources(environment.host+"/taillePlaques").subscribe(data=>{
      this.taillePlaques=data;
    });
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupesArticle=data;
      console.log(this.groupesArticle);
    });
    this.pcService.getResources(environment.host+"/listPlaqueses").subscribe(data=>{
      this.listPlaques=data;
    });
  }

  private addPlaque(plaque:any,f:NgForm){
    if(plaque!=null) {
      const p = {
        id: plaque.id,
        listPlaques: {id: f.value.listPlaques},
        type: "plaque standard",
        taille: {id: f.value.taille},
        quantite: f.value.quantite + plaque.quantite
      };
      this.pcService.updateResource(environment.host + "/plaque/", p).subscribe(data => {
        alert("added succesfully");
        this.router.navigateByUrl("plaques");
      });
    }else {

      const p = {
        listPlaques: {id: f.value.listPlaques},
        type: "plaque standard",
        taille: {id: f.value.taille},
        quantite: f.value.quantite
      };

      this.pcService.newResource(environment.host + "/plaque/", p).subscribe(data => {
        alert("added succesfully");
        this.router.navigateByUrl("plaques");
      });
    }
  }

  onAddPlaque(f: NgForm) {
    this.plaque=this.pcService.getResources(environment.host+"/plaque/findPlaque?taille="+f.value.taille+
      "&listPlaques="+f.value.listPlaques).subscribe(data=>{
        this.plaque=data;
        console.log(data);
        this.addPlaque(this.plaque,f);
    });

  }
}
