import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  updateClientFormGroup: any;
  @Output() newItemEvent=new EventEmitter();
  @Input() url:string='';
  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.pcService.getResources(atob(this.url)).subscribe(data=>{
      this.updateClientFormGroup=this.fb.group({
        nom:[data.nom,Validators.required]
      });
    });
  }

  onUpdateClient() {

    this.pcService.updateResource(atob(this.url),this.updateClientFormGroup?.value).subscribe(data=>{
      alert('updated succesfully');
      this.newItemEvent.emit();
    });

  }
}
