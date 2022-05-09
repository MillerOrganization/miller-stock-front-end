import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-plaque',
  templateUrl: './new-plaque.component.html',
  styleUrls: ['./new-plaque.component.css']
})
export class NewPlaqueComponent implements OnInit {
  groupesArticle: any;
  taillePlaques: any;

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
  }

  onAddPlaque(f: NgForm) {
    const plaque = {
      numeroArticle:f.value.numeroArticle,
      designation:f.value.designation,
      groupeArticle:{id:f.value.groupeArticle},
      type:"plaque standard",
      taille:{id:f.value.taille},
      quantite:f.value.quantite
    }

    this.pcService.newResource(environment.host+"/plaque/",plaque).subscribe(data=>{
      alert("added succesfully");
      this.router.navigateByUrl("plaques");
    });


  }
}
