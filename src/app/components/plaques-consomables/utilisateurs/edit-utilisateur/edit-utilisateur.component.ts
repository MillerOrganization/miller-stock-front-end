import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent implements OnInit {

  url:string;
  userFormGroup?:FormGroup;
  roles: any;
  rolesUser: Array<string>=[];
  constructor(private activatedRoute:ActivatedRoute,
              private plaquesConsomablesService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) {
    this.url=atob(this.activatedRoute.snapshot.params?.['url']);
  }

  ngOnInit(): void {
    this.plaquesConsomablesService.getResources(this.url).subscribe(data=> {
      this.plaquesConsomablesService.getResources(environment.host+"/roles").subscribe(data=>{
        this.roles=data._embedded.roles;
      });
      console.log(data._links.roles.href);
      this.plaquesConsomablesService.getResources(data._links.roles.href).subscribe(data=>{
        for(let role of data._embedded.roles)
          this.rolesUser.push(role._links.self.href);
      });
      this.userFormGroup = this.fb.group({
        nom: [data?.nom, Validators.required],
        prenom: [data?.prenom, Validators.required],
        username:[data?.username,Validators.required],
        mail:[data?.mail,Validators.required],
        password:[data?.password,Validators.required],
        phone:[data?.phone,Validators.required],
        dateNaissance:[data?.dateNaissance,Validators.required],
        roles:[this.rolesUser,Validators.required]
      });
       console.log(this.userFormGroup);
    });


  }

  onUpdateUser() {
    this.plaquesConsomablesService.updateResourceByPatch(this.url,this.userFormGroup?.value)
      .subscribe(data=> {
      alert("updated successfully");
      this.router.navigateByUrl("utilisateurs");
    });
  }
}
