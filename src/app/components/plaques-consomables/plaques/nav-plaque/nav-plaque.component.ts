import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthUserService} from "../../../../../services/auth-user.service";

@Component({
  selector: 'app-nav-plaque',
  templateUrl: './nav-plaque.component.html',
  styleUrls: ['./nav-plaque.component.css']
})
export class NavPlaqueComponent implements OnInit {

  constructor(private router:Router,public authService:AuthUserService) { }
  @Output() newItemEvent=new EventEmitter();
  ngOnInit(): void {
  }

  onNewPlaque() {
    this.router.navigateByUrl("new-plaque");
  }

  onNewChute() {
    this.router.navigateByUrl("new-chute");
  }

  onSearch(value: any) {
    this.newItemEvent.emit(value);
  }

  onListPlaques() {
    this.router.navigateByUrl("list-plaques");
  }
}
