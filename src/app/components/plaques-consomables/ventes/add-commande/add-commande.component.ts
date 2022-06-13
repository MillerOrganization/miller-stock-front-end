import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {CaddyService} from "../../../../../services/caddy.service";

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  commandeFormGroup?: FormGroup;
  clients: any;
  @Output()newItemEvent=new EventEmitter();

  constructor(private pcService:PlaquesConsommablesService,
              private fb:FormBuilder,
              private caddyService:CaddyService) { }

  ngOnInit(): void {
    this.getClients();
    this.commandeFormGroup=this.fb.group({
      client:['',Validators.required],
      consomables:[[]]
    });
  }

  getClients(){
    this.pcService.getResources(environment.host+'/clients').subscribe(data=>{
      this.clients=data;
      console.log(this.clients)
    });
  }

  addCommande() {
    console.log(this.commandeFormGroup?.value);
    this.caddyService.putCaddy(this.commandeFormGroup?.value);
    alert('panier ajouté');
    this.newItemEvent.emit('close');
  }
}
