import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-consomable',
  templateUrl: './nav-consomable.component.html',
  styleUrls: ['./nav-consomable.component.css']
})
export class NavConsomableComponent implements OnInit {

  @Output() newItemEvent=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onNewConsomable() {
    this.newItemEvent.emit('open');
  }

  onListConsomable() {
    this.router.navigateByUrl("list-consomable");
  }

  onSearch(value: any) {
    this.newItemEvent.emit(value.keyword);
  }

}
