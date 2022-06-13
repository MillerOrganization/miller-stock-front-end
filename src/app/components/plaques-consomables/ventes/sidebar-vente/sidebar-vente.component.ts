import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CaddyService} from "../../../../../services/caddy.service";
import {AuthUserService} from "../../../../../services/auth-user.service";

@Component({
  selector: 'app-sidebar-vente',
  templateUrl: './sidebar-vente.component.html',
  styleUrls: ['./sidebar-vente.component.css']
})
export class SidebarVenteComponent implements OnInit {
  clickedItem: string='commandes';

  @Output() newItemEvent=new EventEmitter();

  constructor(public caddyService:CaddyService,
              public authService:AuthUserService) { }

  ngOnInit(): void {
  }

  emitEvent(event:string){
    this.clickedItem=event;
    this.newItemEvent.emit(event);
  }

}
