import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  userFormGroup?:FormGroup;
  roles: any;
  constructor(private activatedRoute:ActivatedRoute,
              private plaquesConsomablesService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username:['',Validators.required],
      mail:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
      dateNaissance:['',Validators.required],
      roles:[[],Validators.required]
    });
    this.plaquesConsomablesService.getResources(environment.host+"/roles").subscribe(data=>{
      this.roles=data._embedded.roles;
    });
  }

  onAddUser() {
    console.log(this.userFormGroup?.value);
    this.plaquesConsomablesService.newResource(environment.host+"/utilisateurs",this.userFormGroup?.value).
    subscribe(data=>{
      alert("added succesfully");
      this.router.navigateByUrl("utilisateurs");
    });

  }
}
