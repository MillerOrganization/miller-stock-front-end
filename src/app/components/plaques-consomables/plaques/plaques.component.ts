import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-plaques',
  templateUrl: './plaques.component.html',
  styleUrls: ['./plaques.component.css']
})
export class PlaquesComponent implements OnInit {

  plaques:any;
  constructor(private plaquesConsommablesService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetAllPlaques();
  }

  onGetAllPlaques(){
    this.plaquesConsommablesService.getResources(environment.host+"/plaque/").subscribe((data)=>{
      this.plaques=data;
    })
  }

  onDeletePlaque(plaque: any) {
    this.plaquesConsommablesService.deleteResource(environment.host+"/plaque/"+plaque?.id).subscribe(
      data=>{
        this.onGetAllPlaques();
      }
    )
  }

  onUpdatePlaque(plaque: any) {
    this.router.navigateByUrl("edit-plaque/"+plaque?.id);

  }

  onSearch(value: any) {
    console.log(value.longueur+" "+value.largeur);
    this.plaquesConsommablesService.getResources(environment.host+"/plaque/find?longueur="+value.longueur+"&"+
    "largeur="+value.largeur).subscribe(data=>{
      this.plaques=data;
    });
  }

  onUsePlaque(plaque: any) {
    this.router.navigateByUrl("consommer-plaque/"+plaque.id+"/"+1);
    //this.router.navigate(['consommer-plaque',plaque.id,stringify(1)]);
  }
}
