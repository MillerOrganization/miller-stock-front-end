import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-plaque',
  templateUrl: './nav-plaque.component.html',
  styleUrls: ['./nav-plaque.component.css']
})
export class NavPlaqueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onNewPlaque() {
    this.router.navigateByUrl("new-plaque");
  }

  onNewChute() {
    this.router.navigateByUrl("new-chute");
  }
}
