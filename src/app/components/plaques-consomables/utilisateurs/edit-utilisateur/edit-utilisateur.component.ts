import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent implements OnInit {

  url:string;
  userFormGroup?:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
              private plaquesConsomablesService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) {
    this.url=atob(this.activatedRoute.snapshot.params?.['url']);
    console.log(this.url);
  }

  ngOnInit(): void {
    this.plaquesConsomablesService.getResources(this.url).subscribe(data=> {
       this.userFormGroup = this.fb.group({
          nom: [data?.nom, Validators.required],
          prenom: [data?.prenom, Validators.required],
          username:[data?.username,Validators.required],
          mail:[data?.mail,Validators.required],
          password:[data?.password,Validators.required],
          phone:[data?.phone,Validators.required],
          dateNaissance:[data?.dateNaissance,Validators.required]
        });
       console.log(this.userFormGroup);
    });
  }

  onUpdateUser() {
    this.plaquesConsomablesService.updateResource(this.url,this.userFormGroup?.value).subscribe(data=>
    {
      alert("updated successfully");
      this.router.navigateByUrl("utilisateurs");
    });
  }
}
