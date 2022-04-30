import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  public utilisateurs:any;
  constructor(private plaquesConsommablesService:PlaquesConsommablesService,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetAllUtilisateurs();
  }

  onGetAllUtilisateurs(){
    this.plaquesConsommablesService.getResources(environment.host+"/utilisateurs")
      .subscribe(data=>{
        this.utilisateurs=data;
      },error => {
        console.log(error);
      });
  }


  onDeleteUtilisateur(user: any) {
    let host=user?.['_links']?.['self']?.['href'];
    let conf=confirm("êtes vous sure de supprimer ?");
    if(conf){
      this.plaquesConsommablesService.deleteResource(host).subscribe(data=>{
          this.onGetAllUtilisateurs();
      },error => console.log(error))
    }

    //console.log(host);
  }

  onEditUtilisateur(user: any) {
    let url=btoa(user?.['_links']?.['self']?.['href']);
    this.router.navigateByUrl("edit-utilisateur/"+url);
    //url=atob(url);
    //console.log(url);
  }
}
