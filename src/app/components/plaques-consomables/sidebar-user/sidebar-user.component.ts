import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  clickedItem: string='profile';
  @Output() newItemEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(event:string){
    this.clickedItem=event;
    this.newItemEvent.emit(event);
  }

  profile() {
    this.emitEvent('profile');
  }

  plaquesUsed() {
    this.emitEvent('plaques-used');
  }

  consomablesUsed() {
    this.emitEvent('consommables-used');
  }
}
