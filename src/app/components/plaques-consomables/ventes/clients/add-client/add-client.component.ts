import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  addClientFormGroup?: FormGroup;
  @Output() newItemEvent=new EventEmitter();
  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addClientFormGroup=this.fb.group({
      nom:['',Validators.required]
    });
  }

  onAddClient() {

    this.pcService.newResource(environment.host+"/clients",this.addClientFormGroup?.value).subscribe(data=>{
      alert('ajouté avec succées');
      this.newItemEvent.emit('close');
    });

  }
}
