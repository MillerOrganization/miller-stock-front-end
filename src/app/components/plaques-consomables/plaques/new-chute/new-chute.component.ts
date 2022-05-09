import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-new-chute',
  templateUrl: './new-chute.component.html',
  styleUrls: ['./new-chute.component.css']
})
export class NewChuteComponent implements OnInit {
  groupesArticle: any;

  constructor(private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
    this.pcService.getResources(environment.host+"/groupeArticles").subscribe(data=>{
      this.groupesArticle=data;
      console.log(this.groupesArticle);
    });
  }

  onAddPlaque(f: NgForm) {

  }
}
