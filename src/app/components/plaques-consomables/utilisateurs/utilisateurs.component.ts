import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {NgForm} from "@angular/forms";
import {AuthUserService} from "../../../../services/auth-user.service";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  public utilisateurs:any;
  constructor(private plaquesConsommablesService:PlaquesConsommablesService,
              private router:Router,
              public authUserService:AuthUserService) { }

  ngOnInit(): void {
    if(this.authUserService.isAuthenticated() && this.authUserService.roleMatches('admin'))
        this.onGetAllUtilisateurs();
    else this.router.navigateByUrl('authenticate');
  }

  onGetAllUtilisateurs(){
    this.plaquesConsommablesService.getResources(environment.host+"/utilisateurs")
      .subscribe(data=>{
        this.utilisateurs=data;
      });
  }


  onDeleteUtilisateur(user: any) {
    let host=user?.['_links']?.['self']?.['href'];
    let conf=confirm("êtes vous sure de supprimer ?");
    if(conf){
      this.plaquesConsommablesService.deleteResource(host).subscribe(data=>{
          this.onGetAllUtilisateurs();
      });
    }

    //console.log(host);
  }

  onEditUtilisateur(user: any) {
    let url=btoa(user?.['_links']?.['self']?.['href']);
    this.router.navigateByUrl("edit-utilisateur/"+url);
    //url=atob(url);
    //console.log(url);
  }

  onSearch(f: NgForm) {
    this.plaquesConsommablesService.getResources(environment.host+"/utilisateurs/search/byKeyword?kw="
      +f.value.keyword).subscribe(data=>{
        this.utilisateurs=data;
    });
  }

  onAddUtilisateur() {
    this.router.navigateByUrl("add-utilisateur");
  }
}
