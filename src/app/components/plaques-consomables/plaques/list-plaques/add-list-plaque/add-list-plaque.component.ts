import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-add-list-plaque',
  templateUrl: './add-list-plaque.component.html',
  styleUrls: ['./add-list-plaque.component.css']
})
export class AddListPlaqueComponent implements OnInit {
  plaqueFormGroup?: FormGroup;
  groupeArticles: any;
  @Output() newItemEvent=new EventEmitter();

  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.plaqueFormGroup=this.fb.group({
      designation:['',Validators.required],
      groupeArticle:['',Validators.required],
      numeroArticle:['',Validators.required]
    });
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupeArticles=data?._embedded?.groupeArticles;
    });
  }

  onAddPlaque() {
    this.pcService.newResource(environment.host+"/listPlaqueses",this.plaqueFormGroup?.value).subscribe(data=>{
        alert("added succesfully");
        this.newItemEvent.emit("close");
    });
  }
}
