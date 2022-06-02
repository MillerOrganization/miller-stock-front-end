import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-edit-consomable',
  templateUrl: './edit-consomable.component.html',
  styleUrls: ['./edit-consomable.component.css']
})
export class EditConsomableComponent implements OnInit {
  @Input() consomable: any;
  consomableFormGroup?: FormGroup;
  listConsomables: any;
  @Output() newItemEvent=new EventEmitter();

  constructor(private pcService: PlaquesConsommablesService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fillFormGroup();
    this.getConsomablesFromList();
  }

  fillFormGroup() {
    this.pcService.getResources(this.consomable._links.listConsomable.href).subscribe(data=>{
    this.consomableFormGroup = this.fb.group({
      listConsomable: [data._links.self.href, Validators.required],
      quantite: [this.consomable.quantite, Validators.required]
    });
    });
  }

  getConsomablesFromList() {
    this.pcService.getResources(environment.host + "/listConsomables").subscribe(data => {
      this.listConsomables = data;
    });

  }


  onUpdateConsomable() {
    if(this.consomableFormGroup?.value.quantite>=0){
      this.pcService.updateResourceByPatch(this.consomable._links.self.href,this.consomableFormGroup?.value).subscribe(
        data=>{
          alert("updated successfully");
          this.newItemEvent.emit("close");
        }
      )
    }
    else alert("la quantite est toujours positive");

  }
}
