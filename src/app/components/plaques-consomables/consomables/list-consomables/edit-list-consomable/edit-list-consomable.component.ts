import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../../../environments/environment";
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";

@Component({
  selector: 'app-edit-list-consomable',
  templateUrl: './edit-list-consomable.component.html',
  styleUrls: ['./edit-list-consomable.component.css']
})
export class EditListConsomableComponent implements OnInit {
  consomableFormGroup: any;
  categories: any;
  @Input()  consomable:any;
  @Output() newItemEvent=new EventEmitter();
  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.consomable);
    this.fillForm();
    this.getCategories();
  }



  fillForm(){
    this.pcService.getResources(this.consomable._links.categorie.href).subscribe(
      data=>{
        console.log(data);
        this.consomableFormGroup=this.fb.group({
          designation:[this.consomable.designation,Validators.required],
          categorie:[data._links.self.href,Validators.required],
          numeroArticle:[this.consomable.numeroArticle,Validators.required]
        });
      }
    )

  }

  getCategories(){
    this.pcService.getResources(environment.host+"/categories").subscribe(data=>{
      this.categories=data?._embedded?.categories;
    });
  }



  onUpdateConsomable() {

    this.pcService.updateResourceByPatch(this.consomable._links.self.href,
      this.consomableFormGroup.value).subscribe(data=>{
         alert('updated succesfully');
         this.newItemEvent.emit('close');
    })

  }
}
