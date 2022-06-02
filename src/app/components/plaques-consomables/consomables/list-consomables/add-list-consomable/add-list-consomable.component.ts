import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-add-list-consomable',
  templateUrl: './add-list-consomable.component.html',
  styleUrls: ['./add-list-consomable.component.css']
})
export class AddListConsomableComponent implements OnInit {
  @Output() newItemEvent=new EventEmitter();
  consomableFormGroup?: FormGroup;
  categories: any;
  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.consomableFormGroup=this.fb.group({
      designation:['',Validators.required],
      categorie:['',Validators.required],
      numeroArticle:[0,Validators.required]
    });
    this.pcService.getResources(environment.host+"/categories").subscribe(data=>{
      this.categories=data?._embedded?.categories;
    });
  }

  onAddPlaque() {
    if (this.consomableFormGroup?.value.numeroArticle>=0)
    this.pcService.newResource(environment.host+"/listConsomables",this.consomableFormGroup?.value).subscribe(data=>{
      alert("added succesfully");
      this.newItemEvent.emit("close");
    });
    else  alert("impossible d'ajouter un numero d article negatif");

  }


}
