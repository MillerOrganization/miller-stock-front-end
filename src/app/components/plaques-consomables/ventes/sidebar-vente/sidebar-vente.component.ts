import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-vente',
  templateUrl: './sidebar-vente.component.html',
  styleUrls: ['./sidebar-vente.component.css']
})
export class SidebarVenteComponent implements OnInit {
  clickedItem: string='commandes';

  @Output() newItemEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(event:string){
    this.clickedItem=event;
    this.newItemEvent.emit(event);
  }

  commandes() {
    this.emitEvent('commandes');
  }

  addCommande() {
    this.emitEvent('add-commande');
  }

  toutesComandes() {
    this.emitEvent('toutes-commandes');
  }
}
