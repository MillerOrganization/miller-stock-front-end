import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-edit-list-plaque',
  templateUrl: './edit-list-plaque.component.html',
  styleUrls: ['./edit-list-plaque.component.css']
})
export class EditListPlaqueComponent implements OnInit {
  url?:string;
  plaqueFormGroup?:FormGroup;
  private plaque: any;
  groupeArticles: any;
  constructor(private activatedRoute:ActivatedRoute,
              private pcService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private router:Router) {
  }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params?.['url']);
    console.log(this.url);

    this.pcService.getResources(this.url).subscribe(data=>{
      this.plaque=data;
      let groupeArticleUrl=data?._links?.groupeArticle?.href;
      this.pcService.getResources(groupeArticleUrl).subscribe(groupeArticle=>{
        this.plaque.groupeArticle=groupeArticle._links.self.href;
        this.plaqueFormGroup=this.fb.group({
          designation:[this.plaque.designation,Validators.required],
          groupeArticle:[this.plaque.groupeArticle,Validators.required],
          numeroArticle:[this.plaque.numeroArticle,Validators.required]
        });
      });
    });
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupeArticles=data?._embedded?.groupeArticles;
    });
  }

  onUpdatePlaque() {
    if(this.url!=undefined)
    this.pcService.updateResourceByPatch(this.url,this.plaqueFormGroup?.value)
      .subscribe(data=> {
        alert("updated successfully");
        this.router.navigateByUrl("list-plaques");
      });

  }
}
