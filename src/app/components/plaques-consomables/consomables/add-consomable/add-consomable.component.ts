import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-add-consomable',
  templateUrl: './add-consomable.component.html',
  styleUrls: ['./add-consomable.component.css']
})
export class AddConsomableComponent implements OnInit {
  consomableFormGroup?: FormGroup;
  listConsomables: any;
  ConsomableSelected?:string;
  @Output() newItemEvent=new EventEmitter();

  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.fillFormGroup();
    this.getConsomablesFromList();
  }

  fillFormGroup(){
    this.consomableFormGroup=this.fb.group({
      listConsomable:['',Validators.required],
      quantite:[0,Validators.required]
    });
  }

  getConsomablesFromList(){
    this.pcService.getResources(environment.host+"/listConsomables").subscribe(data=>{
      this.listConsomables=data;
    });
  }

  addConsomable() {
    this.pcService.getResources(this.consomableFormGroup?.value.listConsomable).subscribe(lc=>{
      /*this.pcService.getResources(environment.host+"/consomable/byListConsomable?lc="+
      lc.designation).subscribe(consomable=>{
        console.log(consomable);
      });*/
      this.getConsomableByDesignationAndSave(lc.designation);
    });
  }

  getConsomableByDesignationAndSave(listConsomable:string){
    this.pcService.getResources(environment.host+"/consomable/byListConsomable?lc="+
      listConsomable).subscribe(consomable=>{
      console.log(consomable);
      this.saveConsomable(consomable);
    });
  }

  saveConsomable(consomableToUpdate:any){
    let consomable=this.consomableFormGroup?.value;
    if(consomable.quantite>=0){
      if(consomableToUpdate==null){
        this.pcService.newResource(environment.host+"/consomables",consomable).subscribe(
          data=>{
            alert("added successfully");
            this.newItemEvent.emit("close");
          }
        );
      }else {
        consomable.quantite+=consomableToUpdate.quantite;
        this.pcService.updateResourceByPatch(environment.host+"/consomables/"+consomableToUpdate.id
          ,consomable).subscribe(
          data=>{
            alert("added successfully");
            this.newItemEvent.emit("close");
          }
        );
      }
    }
    else alert("la quantite est toujours positive");
  }

}
